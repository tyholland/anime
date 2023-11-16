import React, { useEffect, useState } from 'react';
import * as GlobalStyles from 'Styles/global.style';
import LeagueCard from 'Components/league-card/league-card';
import Metadata from 'Components/metadata/metadata';
import Button from 'Components/button/button';
import * as Styles from './view.style';
import { responseError } from 'Utils/index';
import Error from 'PageComponents/error/error';
import { addEvent } from 'Utils/amplitude';
import { getAllLeagues } from 'Requests/league';
import { useUserContext } from 'Hooks/user';
import Loader from 'Components/loader/loader';
import NotUser from 'Components/not-user/not-user';
import ReadMore from 'Components/read-more/read-more';
import Disclaimer from 'Components/disclaimer/disclaimer';
import { FRIDAY, MONDAY, SUNDAY, THURSDAY, alerts } from 'Utils/constants';
import { getDate } from 'Utils/index';
import { setStorageData } from 'Utils/cache';
import { useRouter } from 'next/router';

const ViewLeague = () => {
  const { currentUser } = useUserContext();
  const [leagueCard, setLeagueCard] = useState<React.JSX.Element[]>([]);
  const [leaguePastCard, setLeaguePastCard] = useState<React.JSX.Element[]>([]);
  const [errorPage, setErrorPage] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isUser, setIsUser] = useState<boolean>(false);
  const [msg, setMsg] = useState(null);
  const router = useRouter();

  const handleAlertMsg = (label: string, message: string) => {
    const date = getDate();
    const theDate = `${date.month()}/${date.date()}/${date.year()}`;

    setMsg(message);
    setStorageData(label, JSON.stringify(theDate));
  };

  const handleAlerts = (leagueCard: Record<string, any>) => {
    if (leagueCard.length) {
      const date = getDate();
      const dayOfTheWeek = date.day();
      const eligiblePage =
        router.pathname !== '/login' && router.pathname !== '/sign-up';

      if (eligiblePage) {
        switch (dayOfTheWeek) {
        case MONDAY:
          handleAlertMsg('afl.monday', alerts.start.msg);
          break;
        case THURSDAY:
          handleAlertMsg('afl.thursday', alerts.voting.msg);
          break;
        case FRIDAY:
          handleAlertMsg('afl.friday', alerts.damage.msg);
          break;
        case SUNDAY:
          handleAlertMsg('afl.sunday', alerts.affinity.msg);
          break;
        default:
          break;
        }
      }
    }
  };

  const handleLeagueSetup = (
    current: Record<string, any>,
    past: Record<string, any>
  ) => {
    const currentLeagues = current.map(
      (item: Record<string, any>, index: number) => {
        return <LeagueCard key={`${item.team_name}-${index}`} data={item} />;
      }
    );

    const pastLeagues = past.map((item: Record<string, any>, index: number) => {
      return <LeagueCard key={`${item.team_name}-${index}`} data={item} />;
    });

    setLeagueCard(currentLeagues);
    setLeaguePastCard(pastLeagues);
    handleAlerts(currentLeagues);
    setIsLoading(false);
  };

  const handleAllLeagues = async () => {
    setIsLoading(true);

    try {
      const { current, past } = await getAllLeagues(currentUser?.token);

      handleLeagueSetup(current, past);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get all leagues view'));
      setErrorPage(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsUser(!!currentUser);

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
      {!isUser && <NotUser />}
      {isUser && (
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
                {msg && <Disclaimer msg={msg} />}
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
                    <GlobalStyles.GlobalTitle>
                      Past Leagues
                    </GlobalStyles.GlobalTitle>
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
