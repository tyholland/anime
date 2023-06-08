import { createContext, useContext, useState } from 'react';
import {
  deleteCachedData,
  getCachedData,
  setCachedData,
} from 'Utils/index';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { MONDAY } from 'Utils/constants';

const LeagueContext = createContext();

export const LeagueWrapper = ({ children }) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const [contextLeague, setContextLeague] = useState(null);
  const cachedUser = getCachedData('aflLeague');
  const currentDate = new Date();
  const date = dayjs.tz(currentDate, 'America/New_York');
  const dayOfTheWeek = date.day() === MONDAY;

  let allLeagueData = null;

  if (contextLeague) {
    allLeagueData = contextLeague;
    allLeagueData.isMonday = dayOfTheWeek;
  } else if (cachedUser) {
    allLeagueData = cachedUser;
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
