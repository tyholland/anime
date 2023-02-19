import React, { useEffect, useState } from 'react';
import {
  $TeamTotalText,
  $TeamTotalAmount,
  $TeamTotal,
  $TeamInfo,
  $TeamContent,
  $TeamName,
  $TeamLeague,
  $TeamBtnSection,
} from './team.style.js';
import { $GlobalContainer } from 'Styles/global.style';
import Button from 'Components/button';
import TeamCard from 'Components/team-card';
import BackLink from 'Components/back-link/index.js';
import Metadata from 'Components/metadata/index.js';
import { useRouter } from 'next/router.js';
import Error from 'PageComponents/error/index.js';
import { getCookie, responseError } from 'Utils/index.js';
import { getTeam, getTeamInfo } from 'src/requests/team.js';
import Loader from 'Components/loader/index.js';
import { addEvent } from 'Utils/amplitude.js';

const Team = () => {
  const router = useRouter();
  const [teamId, setTeamId] = useState(null);
  const [teamData, setTeamData] = useState(null);
  const [rank, setRank] = useState(null);
  const [isPastWeek, setIsPastWeek] = useState(null);
  const [totalPoints, setTotalPoints] = useState(null);
  const [errorPage, setErrorPage] = useState(false);

  const handleTeam = async () => {
    const { team_id } = router.query;

    try {
      const teamData = await getTeam(team_id, getCookie('__session'));
      const { team, memberId } = teamData;
      const teamInfo = await getTeamInfo(memberId, getCookie('__session'));

      const totalPoints =
        team.captain.teamPoints +
        team.brawler_a.teamPoints +
        team.brawler_b.teamPoints +
        team.bs_brawler.teamPoints +
        team.bs_support.teamPoints +
        team.support.teamPoints +
        team.villain.teamPoints +
        team.battlefield.teamPoints;

      setTeamId(team_id);
      setRank(teamInfo.rank);
      setIsPastWeek(team.week < teamInfo.leagueWeek);
      setTotalPoints(totalPoints);
      setTeamData(teamData);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get team data'));
      setErrorPage(true);
    }
  };

  useEffect(() => {
    if (Object.keys(router.query).length) {
      handleTeam();
    }
  }, [router.query]);

  if (errorPage) {
    return <Error />;
  }

  return (
    <>
      <Metadata
        title="Team page"
        description="Page for each individual team. You can update/edit the roster. Edit your lineup for the week. As well as edit/view team info."
      />
      <BackLink />
      <$GlobalContainer>
        {!teamData && <Loader />}
        {teamData && (
          <>
            <$TeamInfo>
              <$TeamContent>
                <$TeamName>{teamData.teamName}</$TeamName>
                {!isPastWeek && (
                  <$TeamLeague>Week: {teamData.team.week}</$TeamLeague>
                )}
                <$TeamLeague>Rank: {`${rank.win}-${rank.loss}`}</$TeamLeague>
              </$TeamContent>
              {!isPastWeek && (
                <$TeamBtnSection>
                  <Button
                    btnText="Team Info"
                    btnColor="primary"
                    redirect={`/team/info/${teamData.memberId}`}
                    customBtnClass="medium"
                  />
                  <Button
                    btnText="Edit Roster"
                    btnColor="primary"
                    customBtnClass="medium"
                    redirect={`/team/edit/${teamId}`}
                  />
                </$TeamBtnSection>
              )}
            </$TeamInfo>
            <TeamCard data={teamData.team} />
            <$TeamTotal>
              <$TeamTotalText>Total</$TeamTotalText>
              <$TeamTotalAmount>{totalPoints}</$TeamTotalAmount>
            </$TeamTotal>
          </>
        )}
      </$GlobalContainer>
    </>
  );
};

export default Team;
