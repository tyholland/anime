import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const formatUser = () => {
  return {
    userId: null,
    email: null,
    isActive: null,
    firebaseId: null,
    username: null,
    totalPoints: null,
  };
};

const formatLeague = () => {
  return {
    leagueId: null,
    leagueName: null,
    teamId: null,
    teamName: null,
    week: null,
    players: {
      captain: null,
      brawlerA: null,
      brawlerB: null,
      bsBrawler: null,
      bsSupport: null,
      support: null,
      villain: null,
      battlefield: null,
      benchA: null,
      benchB: null,
      benchC: null,
      benchD: null,
      benchE: null,
    },
  };
};

export const AppWrapper = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(formatUser);
  const [leagueDetails, setLeagueDetails] = useState(formatLeague);

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
