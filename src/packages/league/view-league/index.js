import React from 'react';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
import Leagues from 'Components/leagues';
import BackLink from 'Components/back-link';

const ViewLeague = ({ setPage, setHasHeader }) => {
  return (
    <$GlobalContainer>
      <BackLink redirect="/" />
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
  );
};

export default ViewLeague;
