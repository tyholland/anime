import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const hasWindow = typeof window !== 'undefined';

const formatUser = () => {
  let user = hasWindow && window.localStorage.getItem('abz.user');

  if (user) {
    user = JSON.parse(user);

    return {
      ...user,
    };
  }

  return null;
};

const formatLeague = () => {
  let league = hasWindow && window.localStorage.getItem('abz.league');

  if (league) {
    league = JSON.parse(league);

    return {
      ...league,
    };
  }

  return null;
};

export const AppWrapper = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(formatUser);
  const [leagueDetails, setLeagueDetails] = useState(formatLeague);

  const updateCurrentUser = (userInfo) => {
    const data = {
      ...currentUser,
      ...userInfo,
    };

    setCurrentUser(data);

    window.localStorage.setItem('abz.user', JSON.stringify(data));
  };

  const updateLeagueDetails = (leagueInfo) => {
    const data = {
      ...leagueDetails,
      ...leagueInfo,
    };

    setLeagueDetails(data);

    window.localStorage.setItem('abz.league', JSON.stringify(data));
  };

  const sharedState = {
    currentUser,
    leagueDetails,
    updateCurrentUser,
    updateLeagueDetails,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
