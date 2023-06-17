import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { accountLogout } from 'Requests/users';
import { addEvent } from 'Utils/amplitude';
import {
  deleteCachedData,
  getCachedData,
  setCachedData,
} from 'Utils/cache';
import {
  responseError,
} from 'Utils/index';
import { UserWrapperContext } from 'Utils/types';

const UserContext = createContext<UserWrapperContext>({
  currentUser: null,
  updateCurrentUser: null,
  deleteCurrentUser: null,
});

export const UserWrapper = ({ children }: PropsWithChildren) => {
  const [contextUser, setContextUser] = useState<Record<string, any> | null>(null);
  const cachedUser = getCachedData('aflUser');

  let currentUser: Record<string, any> = null;

  if (contextUser?.user_id) {
    currentUser = contextUser;
  } else if (cachedUser) {
    currentUser = cachedUser;
    setContextUser(currentUser);
  }

  const updateCurrentUser = (userInfo: Record<string, any>) => {
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

  return (
    <UserContext.Provider
      value={{
        currentUser,
        updateCurrentUser,
        deleteCurrentUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
