import React, { useEffect, useState } from 'react';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
import LeagueCard from 'Components/league-card';
import BackLink from 'Components/back-link';
import Metadata from 'Components/metadata';
import { useAppContext } from 'src/hooks/context';
import Error from 'PageComponents/error';

const ViewLeague = ({ leagues }) => {
  const { currentUser } = useAppContext();
  const [errorPage, setErrorPage] = useState(false);

  const leagueCard = leagues.map((item) => {
    return <LeagueCard key={item.team_name} data={item} />;
  });

  useEffect(() => {
    setErrorPage(!currentUser);
  }, [currentUser]);

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
        {leagueCard}
      </$GlobalContainer>
    </>
  );
};

export default ViewLeague;
