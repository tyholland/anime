import React from 'react';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
import Leagues from 'Components/leagues';
import BackLink from 'Components/back-link';
import ViewLeagueMetadata from './ViewLeagueMetadata';

const ViewLeague = ({ setPage, setHasHeader }) => {
  return (
    <>
      <ViewLeagueMetadata />
      <$GlobalContainer>
        <BackLink redirect="/league" />
        <$GlobalTitle>Your Leagues</$GlobalTitle>
        <Leagues
          league="League Name"
          team="Team Name"
          setPage={setPage}
          setHeader={setHasHeader}
        />
        <Leagues
          league="League Name"
          team="Team Name"
          setPage={setPage}
          setHeader={setHasHeader}
        />
        <Leagues
          league="League Name"
          team="Team Name"
          setPage={setPage}
          setHeader={setHasHeader}
        />
        <Leagues
          league="League Name"
          team="Team Name"
          setPage={setPage}
          setHeader={setHasHeader}
        />
        <Leagues
          league="League Name"
          team="Team Name"
          setPage={setPage}
          setHeader={setHasHeader}
        />
        <Leagues
          league="League Name"
          team="Team Name"
          setPage={setPage}
          setHeader={setHasHeader}
        />
        <Leagues
          league="League Name"
          team="Team Name"
          setPage={setPage}
          setHeader={setHasHeader}
        />
      </$GlobalContainer>
    </>
  );
};

export default ViewLeague;
