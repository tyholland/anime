import { createContext, useContext, useState, PropsWithChildren } from 'react';
import {
  deleteCachedData,
  getCachedData,
  getDate,
  setCachedData,
} from 'Utils/index';
import { MONDAY } from 'Utils/constants';
import { LeagueWrapperContext } from 'Utils/types';

const LeagueContext = createContext<LeagueWrapperContext>({
  allLeagueData: null,
  updateLeagueData: null,
  deleteLeagueData: null,
  handleLeagueRefresh: null,
});

export const LeagueWrapper = ({ children }: PropsWithChildren) => {
  const [contextLeague, setContextLeague] = useState(null);
  const cachedLeaguge = getCachedData('aflLeague');
  const date = getDate();
  const dayOfTheWeek = date.day() === MONDAY;

  let allLeagueData: Record<string, any> = null;

  if (contextLeague) {
    allLeagueData = contextLeague;
    allLeagueData.isMonday = dayOfTheWeek;
  } else if (cachedLeaguge) {
    allLeagueData = cachedLeaguge;
    allLeagueData.isMonday = dayOfTheWeek;
  }

  const updateLeagueData = (additionalInfo: Record<string, any>) => {
    const data = {
      ...allLeagueData,
      ...additionalInfo,
    };

    setContextLeague(data);
    setCachedData('aflLeague', JSON.stringify(data));
  };

  const deleteLeagueData = () => {
    deleteCachedData('aflLeague');
    setContextLeague(null);
  };

  const handleLeagueRefresh: boolean =
    !!allLeagueData?.activeDraft || !!allLeagueData?.isMonday;

  return (
    <LeagueContext.Provider
      value={{
        allLeagueData,
        updateLeagueData,
        deleteLeagueData,
        handleLeagueRefresh,
      }}
    >
      {children}
    </LeagueContext.Provider>
  );
};

export const useLeagueContext = () => {
  return useContext(LeagueContext);
};
