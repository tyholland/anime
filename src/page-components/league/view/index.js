import React, { useEffect, useState } from 'react';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
import LeagueCard from 'Components/league-card';
import BackLink from 'Components/back-link';
import Metadata from 'Components/metadata';
import Button from 'Components/button';
import {
  $ViewLeagueEmptyTitle,
  $ViewLeagueEmptyBtnWrapper,
} from './view.style';
import { getCookie, responseError } from 'Utils/index';
import Error from 'PageComponents/error';
import { addEvent } from 'Utils/amplitude';
import { getAllLeagues } from 'src/requests/league';

const ViewLeague = () => {
  const [leagueCard, setLeagueCard] = useState(null);
  const [errorPage, setErrorPage] = useState(false);

  const handleAllLeagues = async () => {
    try {
      const leagues = await getAllLeagues(getCookie('token'));
      const card = leagues.map((item) => {
        return <LeagueCard key={item.team_name} data={item} />;
      });

      setLeagueCard(card);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get all leagues view'));
      setErrorPage(true);
    }
  };

  useEffect(() => {
    handleAllLeagues();
  }, []);

  if (errorPage) {
    return <Error />;
  }

  return (
    <>
      <Metadata
        title="View Leagues"
        description="View all the Leagues that you are participating in. You can view your specific team for the league, view the specific weeks matchup, and all league details"
      />
      <BackLink />
      <$GlobalContainer>
        <$GlobalTitle>All Leagues</$GlobalTitle>
        {!!leagueCard && leagueCard}
        {!leagueCard && (
          <>
            <$ViewLeagueEmptyTitle>
              You are not apart of any leagues at the moment
            </$ViewLeagueEmptyTitle>
            <$ViewLeagueEmptyBtnWrapper>
              <Button
                btnText="Join a League"
                redirect="/league/join"
                btnColor="primary"
                customBtnClass="medium"
              />
              <Button
                btnText="Create a League"
                redirect="/league/create"
                btnColor="primary"
                customBtnClass="medium"
              />
            </$ViewLeagueEmptyBtnWrapper>
          </>
        )}
      </$GlobalContainer>
    </>
  );
};

export default ViewLeague;
