import React from 'react';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
import LeagueCard from 'Components/league-card';
import BackLink from 'Components/back-link';
import Metadata from 'Components/metadata';
import Button from 'Components/button';
import {
  $ViewLeagueEmptyTitle,
  $ViewLeagueEmptyBtnWrapper,
} from './view.style';

const ViewLeague = ({ leagues }) => {
  const leagueCard = leagues.map((item) => {
    return <LeagueCard key={item.team_name} data={item} />;
  });

  return (
    <>
      <Metadata
        title="View Leagues"
        description="View all the Leagues that you are participating in. You can view your specific team for the league, view the specific weeks matchup, and all league details"
      />
      <BackLink />
      <$GlobalContainer>
        <$GlobalTitle>All Leagues</$GlobalTitle>
        {!!leagues.length && leagueCard}
        {!leagues.length && (
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
