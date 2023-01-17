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
import Loader from 'Components/loader';

const ViewLeague = () => {
  const { currentUser } = useAppContext();
  const [leagueCard, setLeagueCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorPage, setErrorPage] = useState(false);

  const getLeagues = async () => {
    if (!currentUser) {
      setIsLoading(false);
      setErrorPage(true);
      return;
    }

    const { user_id } = currentUser;

    try {
      const leagues = await getAllLeagues(user_id);

      const details = leagues.map((item) => {
        return <LeagueCard key={item.team_name} data={item} />;
      });

      setLeagueCard(details);
      setIsLoading(false);
    } catch (err) {
      addEvent('Error', responseError(err, 'Get all leagues'));
      setErrorPage(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getLeagues();
  }, [currentUser]);

  if (errorPage) {
    return <Error />;
  }

  if (isLoading) {
    return <Loader />;
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
