import { createContext, useContext } from 'react';

const AppContext = createContext();

export const AppWrapper = ({ children }) => {
  const sharedState = {
    testing: 'hello',
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
