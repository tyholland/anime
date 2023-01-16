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
import Error from 'PageComponents/error';
import { getTeam } from 'src/requests/team.js';
import { addEvent } from 'Utils/amplitude.js';
import Loader from 'Components/loader/index.js';
import { responseError } from 'Utils/index.js';
import { useAppContext } from 'src/hooks/context.js';

const Team = ({ leagueId, teamId }) => {
  const { currentUser } = useAppContext();
  const [data, setData] = useState(null);
  const [errorPage, setErrorPage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getTeamData = async () => {
    if (!currentUser) {
      setIsLoading(false);
      setErrorPage(true);
      return;
    }

    try {
      const data = await getTeam(leagueId, teamId);
      setData(data);
      setErrorPage(false);
    } catch (err) {
      addEvent('Error', responseError('Get Team info'));
      setErrorPage(true);
      setErrorPage(false);
    }
  };

  useEffect(() => {
    if (!data) {
      getTeamData();
    }
  }, [data]);

  if (isLoading) {
    return <Loader />;
  }

  if (errorPage) {
    return <Error />;
  }

  return (
    <>
      <Metadata
        title={`${data.teamName}'s page`}
        description={`Team page of ${data.teamName}. You can update/edit the roster. Edit your lineup for the week. As well as edit/view team info.`}
      />
      <BackLink />
      <$GlobalContainer>
        <$TeamInfo>
          <$TeamContent>
            <$TeamName>{data.teamName}</$TeamName>
            <$TeamLeague>Week: {data.team.week}</$TeamLeague>
            <$TeamLeague>Rank: 0-0</$TeamLeague>
          </$TeamContent>
          <$TeamBtnSection>
            <Button
              btnText="Team Info"
              btnColor="primary"
              redirect={`/team/info/${data.memberId}`}
              customBtnClass="medium"
            />
            <Button
              btnText="Edit Roster"
              btnColor="primary"
              customBtnClass="medium"
              redirect={`/team/edit/${leagueId}/${teamId}`}
            />
          </$TeamBtnSection>
        </$TeamInfo>
        <TeamCard data={data.team} />
        <$TeamTotal>
          <$TeamTotalText>Total</$TeamTotalText>
          <$TeamTotalAmount>{data.team.points}</$TeamTotalAmount>
        </$TeamTotal>
      </$GlobalContainer>
    </>
  );
};

export default Team;
