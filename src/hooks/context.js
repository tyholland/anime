import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppWrapper = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [leagueDetails, setLeagueDetails] = useState({});

  const sharedState = {
    currentUser,
    leagueDetails,
    setCurrentUser,
    setLeagueDetails,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
