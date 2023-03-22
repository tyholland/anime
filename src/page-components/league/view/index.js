import React, { useEffect, useState } from 'react';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
import LeagueCard from 'Components/league-card';
import Metadata from 'Components/metadata';
import Button from 'Components/button';
import {
  $ViewLeagueEmptyTitle,
  $ViewLeagueEmptyBtnWrapper,
} from './view.style';
import { responseError } from 'Utils/index';
import Error from 'PageComponents/error';
import { addEvent } from 'Utils/amplitude';
import { getAllLeagues } from 'src/requests/league';
import { useAppContext } from 'src/hooks/context';
import Loader from 'Components/loader';
import NotUser from 'Components/not-user';
import ReadMore from 'Components/read-more';

const ViewLeague = () => {
  const { currentUser } = useAppContext();
  const [leagueCard, setLeagueCard] = useState([]);
  const [account, setAccount] = useState(null);
  const [errorPage, setErrorPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAllLeagues = async () => {
    setIsLoading(true);

    try {
      const leagues = await getAllLeagues(currentUser?.token);
      const card = leagues.map((item) => {
        return <LeagueCard key={item.team_name} data={item} />;
      });

      setLeagueCard(card);
      setIsLoading(false);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get all leagues view'));
      setErrorPage(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setAccount(currentUser);
  }, [currentUser]);

  useEffect(() => {
    if (account) {
      handleAllLeagues();
    }
  }, [account]);

  if (errorPage) {
    return <Error />;
  }

  return (
    <>
      <Metadata
        title="View Leagues"
        description="View all the Leagues that you are participating in. You can view your specific team for the league, view the specific weeks matchup, and all league details"
      />
      {!account && <NotUser />}
      {account && (
        <>
          <$GlobalContainer>
            <$GlobalTitle className="bracketView">
              All Leagues
              <Button
                btnText="Create"
                btnColor="secondary"
                redirect="/league/create"
                customBtnClass="small"
              />
              <Button
                btnText="Join"
                btnColor="secondary"
                redirect="/league/join"
                customBtnClass="small"
              />
            </$GlobalTitle>
            {isLoading && <Loader />}
            {!isLoading && (
              <>
                {!!leagueCard.length && leagueCard}
                {!leagueCard.length && (
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
              </>
            )}
            <ReadMore />
          </$GlobalContainer>
        </>
      )}
    </>
  );
};

export default ViewLeague;
