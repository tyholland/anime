import { createContext, PropsWithChildren, useContext, useState } from 'react';
import {
  deleteCachedData,
  getCachedData,
  setCachedData,
} from 'Utils/cache';
import { StandingsWrapperContext } from 'Utils/types';

const StandingsContext = createContext<StandingsWrapperContext>({
  currentStandings: null,
  updateCurrentStandings: null,
  deleteCurrentStandings: null,
});

export const StandingsWrapper = ({ children }: PropsWithChildren) => {
  const [contextStandings, setContextStandings] = useState<Record<string, any> | null>(null);
  const cachedStandings = getCachedData('aflStandings');

  let currentStandings: Record<string, any> = null;

  if (contextStandings) {
    currentStandings = contextStandings;
  } else if (cachedStandings) {
    currentStandings = cachedStandings;
    setContextStandings(currentStandings);
  }

  const updateCurrentStandings = (standingsInfo: Record<string, any>) => {
    setContextStandings(standingsInfo);
    setCachedData('aflStandings', JSON.stringify(standingsInfo));
  };

  const deleteCurrentStandings = async () => {
    deleteCachedData('aflStandings');
    setContextStandings(null);
  };

  return (
    <StandingsContext.Provider
      value={{
        currentStandings,
        updateCurrentStandings,
        deleteCurrentStandings,
      }}
    >
      {children}
    </StandingsContext.Provider>
  );
};

export const useStandingsContext = () => {
  return useContext(StandingsContext);
};
