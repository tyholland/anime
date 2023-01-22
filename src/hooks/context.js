import { createContext, useContext, useState } from 'react';
import { accountLogout } from 'src/requests/users';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';

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

    setCurrentUser(data);

    window.localStorage.setItem('abz.user', JSON.stringify(data));
  };

  const setInitialUser = (userInfo) => {
    const data = {
      ...userInfo,
    };

    setCurrentUser(data);

    window.localStorage.setItem('abz.user', JSON.stringify(data));
  };

  const deleteCurrentUser = async () => {
    try {
      await accountLogout();
      window.localStorage.removeItem('abz.user');
      setCurrentUser(null);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to delete current user'));
    }
  };

  const sharedState = {
    currentUser,
    updateCurrentUser,
    deleteCurrentUser,
    setInitialUser,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
