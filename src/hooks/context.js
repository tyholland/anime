import { createContext, useContext, useState } from 'react';
import { deleteCookie, setCookie } from 'Utils/index';

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

export const AppWrapper = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(formatUser);

  const updateCurrentUser = (userInfo) => {
    const data = {
      ...currentUser,
      ...userInfo,
    };

    setCookie(data.accessToken);

    delete data.accessToken;

    setCurrentUser(data);

    window.localStorage.setItem('abz.user', JSON.stringify(data));
  };

  const deleteCurrentUser = () => {
    window.localStorage.removeItem('abz.user');
    setCurrentUser(null);
    deleteCookie();
  };

  const sharedState = {
    currentUser,
    updateCurrentUser,
    deleteCurrentUser,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
