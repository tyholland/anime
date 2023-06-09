import { createContext, useContext, useState } from 'react';
import {
  deleteCachedData,
  getCachedData,
  getDate,
  setCachedData,
} from 'Utils/index';
import { MONDAY } from 'Utils/constants';

const LeagueContext = createContext();

export const LeagueWrapper = ({ children }) => {
  const [contextLeague, setContextLeague] = useState(null);
  const cachedLeaguge = getCachedData('aflLeague');
  const date = getDate();
  const dayOfTheWeek = date.day() === MONDAY;

  let allLeagueData = null;

  if (contextLeague) {
    allLeagueData = contextLeague;
    allLeagueData.isMonday = dayOfTheWeek;
  } else if (cachedLeaguge) {
    allLeagueData = cachedLeaguge;
    allLeagueData.isMonday = dayOfTheWeek;
  }

  const updateLeagueData = (additionalInfo) => {

    const data = {
      ...allLeagueData,
      ...additionalInfo
    };

    setContextLeague(data);
    setCachedData('aflLeague', JSON.stringify(data));
  };

  const deleteLeagueData = () => {
    deleteCachedData('aflLeague');
    setContextLeague(null);
  };

  const handleLeagueRefresh = !!allLeagueData?.activeDraft || !!allLeagueData?.isMonday;

  const sharedState = {
    allLeagueData,
    updateLeagueData,
    deleteLeagueData,
    handleLeagueRefresh
  };

  return (
    <LeagueContext.Provider value={sharedState}>{children}</LeagueContext.Provider>
  );
};

export const useLeagueContext = () => {
  return useContext(LeagueContext);
};
