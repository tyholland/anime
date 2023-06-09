import { createContext, useContext, useState } from 'react';
import {
  deleteCachedData,
  getCachedData,
  setCachedData,
} from 'Utils/index';

const TeamContext = createContext();

export const TeamWrapper = ({ children }) => {
  const [contextTeam, setContextTeam] = useState(null);
  const [contextTeamInfo, setContextTeamInfo] = useState(null);
  const [contextTeamRecap, setContextTeamRecap] = useState(null);
  const cachedTeamInfo = getCachedData('aflTeam.info');
  const cachedTeamRecap = getCachedData('aflTeam.recap');
  const captain = getCachedData('aflTeam.captain');
  const brawler_a = getCachedData('aflTeam.brawler_a');
  const brawler_b = getCachedData('aflTeam.brawler_b');
  const bs_brawler = getCachedData('aflTeam.bs_brawler');
  const bs_support = getCachedData('aflTeam.bs_support');
  const support = getCachedData('aflTeam.support');
  const battlefield = getCachedData('aflTeam.battlefield');
  const villain = getCachedData('aflTeam.villain');
  const bench0 = getCachedData('aflTeam.bench0');
  const bench1 = getCachedData('aflTeam.bench1');
  const bench2 = getCachedData('aflTeam.bench2');
  const bench3 = getCachedData('aflTeam.bench3');
  const details = getCachedData('aflTeam.details');

  let allTeamData = null;
  let allInfoData = null;
  let allRecapData = null;

  if (contextTeam) {
    allTeamData = contextTeam;
  } else if (captain) {
    allTeamData = {
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
      ...details,
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
    const data = {
      ...allTeamData,
      ...additionalInfo
    };

    setContextTeam(data);
    setCachedData('aflTeam.captain', JSON.stringify(data.captain));
    setCachedData('aflTeam.brawler_a', JSON.stringify(data.brawler_a));
    setCachedData('aflTeam.brawler_b', JSON.stringify(data.brawler_b));
    setCachedData('aflTeam.bs_brawler', JSON.stringify(data.bs_brawler));
    setCachedData('aflTeam.bs_support', JSON.stringify(data.bs_support));
    setCachedData('aflTeam.support', JSON.stringify(data.support));
    setCachedData('aflTeam.battlefield', JSON.stringify(data.battlefield));
    setCachedData('aflTeam.villain', JSON.stringify(data.villain));
    setCachedData('aflTeam.bench0', JSON.stringify(data.bench0));
    setCachedData('aflTeam.bench1', JSON.stringify(data.bench1));
    setCachedData('aflTeam.bench2', JSON.stringify(data.bench2));
    setCachedData('aflTeam.bench3', JSON.stringify(data.bench3));
    setCachedData('aflTeam.details', JSON.stringify({
      activeAffinity: data.activeAffinity,
      affinity: data.affinity,
      week: data.week,
    }));
  };

  const updateInfoData = (additionalInfo) => {
    const data = {
      ...allInfoData,
      ...additionalInfo
    };

    setContextTeamInfo(data);
    setCachedData('aflTeam.info', JSON.stringify(data));
  };

  const updateRecapData = (additionalInfo) => {
    const data = {
      ...allRecapData,
      ...additionalInfo
    };

    setContextTeamRecap(data);
    setCachedData('aflTeam.recap', JSON.stringify(data));
  };

  const deleteTeamData = () => {
    deleteCachedData('aflTeam.info');
    deleteCachedData('aflTeam.recap');
    deleteCachedData('aflTeam.captain');
    deleteCachedData('aflTeam.brawler_a');
    deleteCachedData('aflTeam.brawler_b');
    deleteCachedData('aflTeam.bs_brawler');
    deleteCachedData('aflTeam.bs_support');
    deleteCachedData('aflTeam.support');
    deleteCachedData('aflTeam.battlefield');
    deleteCachedData('aflTeam.villain');
    deleteCachedData('aflTeam.bench0');
    deleteCachedData('aflTeam.bench1');
    deleteCachedData('aflTeam.bench2');
    deleteCachedData('aflTeam.bench3');
    deleteCachedData('aflTeam.details');
    setContextTeam(null);
    setContextTeamInfo(null);
    setContextTeamRecap(null);
  };

  const sharedState = {
    allTeamData,
    allInfoData,
    allRecapData,
    updateTeamData,
    updateInfoData,
    updateRecapData,
    deleteTeamData,
  };

  return (
    <TeamContext.Provider value={sharedState}>{children}</TeamContext.Provider>
  );
};

export const useTeamContext = () => {
  return useContext(TeamContext);
};
