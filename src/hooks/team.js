import { createContext, useContext, useState } from 'react';
import { deleteStorageData, getDate, getStorageData, setStorageData } from 'Utils/index';
import { MONDAY } from 'Utils/constants';

const TeamContext = createContext();

export const TeamWrapper = ({ children }) => {
  const [contextTeam, setContextTeam] = useState(null);
  const [contextTeamInfo, setContextTeamInfo] = useState(null);
  const [contextTeamRecap, setContextTeamRecap] = useState(null);
  const cachedTeamInfo = getStorageData('aflTeam.info');
  const cachedTeamRecap = getStorageData('aflTeam.recap');
  const captain = getStorageData('aflTeam.captain');
  const brawler_a = getStorageData('aflTeam.brawler_a');
  const brawler_b = getStorageData('aflTeam.brawler_b');
  const bs_brawler = getStorageData('aflTeam.bs_brawler');
  const bs_support = getStorageData('aflTeam.bs_support');
  const support = getStorageData('aflTeam.support');
  const battlefield = getStorageData('aflTeam.battlefield');
  const villain = getStorageData('aflTeam.villain');
  const bench0 = getStorageData('aflTeam.bench0');
  const bench1 = getStorageData('aflTeam.bench1');
  const bench2 = getStorageData('aflTeam.bench2');
  const bench3 = getStorageData('aflTeam.bench3');
  const details = getStorageData('aflTeam.details');
  const date = getDate();
  const dayOfTheWeek = date.day() === MONDAY;

  let allTeamData = null;
  let allInfoData = null;
  let allRecapData = null;

  if (contextTeam) {
    allTeamData = contextTeam;
    allTeamData.isMonday = dayOfTheWeek;
  } else if (captain) {
    allTeamData = {
      team: {
        captain,
        brawler_a,
        brawler_b,
        bs_brawler,
        bs_support,
        support,
        battlefield,
        villain,
        bench0,
        bench1,
        bench2,
        bench3,
        activeAffinity: details.activeAffinity,
        affinity: details.affinity,
        week: details.week,
      },
      memberId: details.memberId,
      teamName: details.teamName,
      userPoints: details.userPoints,
      isMonday: dayOfTheWeek,
    };
  }

  if (contextTeamInfo) {
    allInfoData = contextTeamInfo;
  } else if (cachedTeamInfo) {
    allInfoData = cachedTeamInfo;
  }

  if (contextTeamRecap) {
    allRecapData = contextTeamRecap;
  } else if (cachedTeamRecap) {
    allRecapData = cachedTeamRecap;
  }

  const updateTeamData = (additionalInfo) => {
    delete additionalInfo.info;
    delete additionalInfo.recap;

    const data = {
      ...allTeamData,
      ...additionalInfo,
    };

    setContextTeam(data);
    setStorageData('aflTeam.captain', JSON.stringify(data.team.captain));
    setStorageData('aflTeam.brawler_a', JSON.stringify(data.team.brawler_a));
    setStorageData('aflTeam.brawler_b', JSON.stringify(data.team.brawler_b));
    setStorageData('aflTeam.bs_brawler', JSON.stringify(data.team.bs_brawler));
    setStorageData('aflTeam.bs_support', JSON.stringify(data.team.bs_support));
    setStorageData('aflTeam.support', JSON.stringify(data.team.support));
    setStorageData(
      'aflTeam.battlefield',
      JSON.stringify(data.team.battlefield)
    );
    setStorageData('aflTeam.villain', JSON.stringify(data.team.villain));
    setStorageData('aflTeam.bench0', JSON.stringify(data.team.bench0));
    setStorageData('aflTeam.bench1', JSON.stringify(data.team.bench1));
    setStorageData('aflTeam.bench2', JSON.stringify(data.team.bench2));
    setStorageData('aflTeam.bench3', JSON.stringify(data.team.bench3));
    setStorageData(
      'aflTeam.details',
      JSON.stringify({
        activeAffinity: data.team.activeAffinity,
        affinity: data.team.affinity,
        week: data.team.week,
        memberId: data.memberId,
        teamName: data.teamName,
        userPoints: data.userPoints,
      })
    );
  };

  const updateInfoData = (additionalInfo) => {
    const data = {
      ...allInfoData,
      ...additionalInfo,
    };

    setContextTeamInfo(data);
    setStorageData('aflTeam.info', JSON.stringify(data));
  };

  const updateRecapData = (additionalInfo) => {
    const data = {
      ...allRecapData,
      ...additionalInfo,
    };

    setContextTeamRecap(data);
    setStorageData('aflTeam.recap', JSON.stringify(data));
  };

  const deleteTeamData = () => {
    deleteStorageData('aflTeam.info');
    deleteStorageData('aflTeam.recap');
    deleteStorageData('aflTeam.captain');
    deleteStorageData('aflTeam.brawler_a');
    deleteStorageData('aflTeam.brawler_b');
    deleteStorageData('aflTeam.bs_brawler');
    deleteStorageData('aflTeam.bs_support');
    deleteStorageData('aflTeam.support');
    deleteStorageData('aflTeam.battlefield');
    deleteStorageData('aflTeam.villain');
    deleteStorageData('aflTeam.bench0');
    deleteStorageData('aflTeam.bench1');
    deleteStorageData('aflTeam.bench2');
    deleteStorageData('aflTeam.bench3');
    deleteStorageData('aflTeam.details');
    setContextTeam(null);
    setContextTeamInfo(null);
    setContextTeamRecap(null);
  };

  const handleLeagueRefresh = !!allTeamData?.isMonday;

  const sharedState = {
    allTeamData,
    allInfoData,
    allRecapData,
    updateTeamData,
    updateInfoData,
    updateRecapData,
    deleteTeamData,
    handleLeagueRefresh,
  };

  return (
    <TeamContext.Provider value={sharedState}>{children}</TeamContext.Provider>
  );
};

export const useTeamContext = () => {
  return useContext(TeamContext);
};
