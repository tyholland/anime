import { createContext, useContext, useState } from 'react';
import { accountLogout } from 'src/requests/users';
import { addEvent } from 'Utils/amplitude';
import {
  deleteCachedData,
  getCachedData,
  responseError,
  setCachedData,
} from 'Utils/index';

const AppContext = createContext();

export const AppWrapper = ({ children }) => {
  const [contextUser, setContextUser] = useState(null);
  const cachedUser = getCachedData('aflUser');

  let currentUser = null;

  if (contextUser?.user_id) {
    currentUser = contextUser;
  } else if (cachedUser) {
    currentUser = cachedUser;
  }

  const updateCurrentUser = (userInfo) => {
    const data = {
      ...currentUser,
      ...userInfo,
    };

    setContextUser(data);
    setCachedData('aflUser', JSON.stringify(data));
    deleteCachedData('aflNonLogged');
  };

  const deleteCurrentUser = async () => {
    try {
      await accountLogout();
      deleteCachedData('aflUser');
      setContextUser(null);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to delete current user'));
    }
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
