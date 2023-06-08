import { createContext, useContext, useState } from 'react';
import {
  deleteCachedData,
  getCachedData,
  setCachedData,
} from 'Utils/index';

const LeagueContext = createContext();

export const LeagueWrapper = ({ children }) => {
  const [contextLeague, setContextLeague] = useState(null);
  const cachedUser = getCachedData('aflLeague');

  let leagueData = null;

  if (contextLeague) {
    leagueData = contextLeague;
  } else if (cachedUser) {
    leagueData = cachedUser;
  }

  const updateLeagueData = (additionalInfo) => {
    const data = {
      ...leagueData,
      ...additionalInfo,
    };

    setContextLeague(data);
    setCachedData('aflLeague', JSON.stringify(data));
  };

  const deleteLeagueData = () => {
    deleteCachedData('aflLeague');
    setContextLeague(null);
  };

  const sharedState = {
    leagueData,
    updateLeagueData,
    deleteLeagueData,
  };

  return (
    <LeagueContext.Provider value={sharedState}>{children}</LeagueContext.Provider>
  );
};

export const useLeagueContext = () => {
  return useContext(LeagueContext);
};
