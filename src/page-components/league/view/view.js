import React, { useEffect, useState } from 'react';
import * as GlobalStyles from 'Styles/global.style';
import LeagueCard from 'Components/league-card/league-card';
import Metadata from 'Components/metadata/metadata';
import Button from 'Components/button/button';
import * as Styles from './view.style';
import { responseError } from 'Utils/index';
import Error from 'PageComponents/error/error';
import { addEvent } from 'Utils/amplitude';
import { getAllLeagues } from 'src/requests/league';
import { useAppContext } from 'src/hooks/user';
import Loader from 'Components/loader/loader';
import NotUser from 'Components/not-user/not-user';
import ReadMore from 'Components/read-more/read-more';

const ViewLeague = () => {
  const { currentUser } = useAppContext();
  const [leagueCard, setLeagueCard] = useState([]);
  const [leaguePastCard, setLeaguePastCard] = useState([]);
  const [errorPage, setErrorPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAllLeagues = async () => {
    setIsLoading(true);

    try {
      const {current, past} = await getAllLeagues(currentUser?.token);

      const currentLeagues = current.map((item, index) => {
        return <LeagueCard key={`${item.team_name}-${index}`} data={item} />;
      });

      const pastLeagues = past.map((item, index) => {
        return <LeagueCard key={`${item.team_name}-${index}`} data={item} />;
      });

      setLeagueCard(currentLeagues);
      setLeaguePastCard(pastLeagues);
      setIsLoading(false);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get all leagues view'));
      setErrorPage(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (currentUser) {
      handleAllLeagues();
    }
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
      {!currentUser && <NotUser />}
      {currentUser && (
        <>
          <GlobalStyles.GlobalContainer>
            <GlobalStyles.GlobalTitle className="bracketView">
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
            </GlobalStyles.GlobalTitle>
            {isLoading && <Loader />}
            {!isLoading && (
              <>
                {!!leagueCard.length && leagueCard}
                {!leagueCard.length && (
                  <>
                    <Styles.ViewLeagueEmptyTitle>
                      You are not apart of any leagues at the moment
                    </Styles.ViewLeagueEmptyTitle>
                    <Styles.ViewLeagueEmptyBtnWrapper>
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
                    </Styles.ViewLeagueEmptyBtnWrapper>
                  </>
                )}
                {!!leaguePastCard.length && (
                  <Styles.ViewLeaguePast>
                    <GlobalStyles.GlobalTitle>Past Leagues</GlobalStyles.GlobalTitle>
                    {leaguePastCard}
                  </Styles.ViewLeaguePast>
                )}
              </>
            )}
          </GlobalStyles.GlobalContainer>
          <ReadMore />
        </>
      )}
    </>
  );
};

export default ViewLeague;
