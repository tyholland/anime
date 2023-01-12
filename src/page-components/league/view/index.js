import React, { useEffect, useState } from 'react';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
import LeagueCard from 'Components/league-card';
import BackLink from 'Components/back-link';
import Metadata from 'Components/metadata';
import { useAppContext } from 'src/hooks/context';
import { getAllLeagues } from 'src/requests/league';
import { addEvent } from 'Utils/amplitude';
import Error from 'PageComponents/error';
import { responseError } from 'Utils/index';

const ViewLeague = () => {
  const { currentUser } = useAppContext();
  const [leagueCard, setLeagueCard] = useState(null);

  const getLeagues = async () => {
    if (!currentUser) {
      return;
    }

    const { user_id } = currentUser;

    try {
      const leagues = await getAllLeagues(user_id);

      const details = leagues.map((item) => {
        return <LeagueCard key={item.team_name} data={item} />;
      });

      setLeagueCard(details);
    } catch (err) {
      addEvent('Error', responseError('Get all leagues'));
    }
  };

  useEffect(() => {
    getLeagues();
  }, []);

  if (!leagueCard) {
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
