import React, { createContext } from 'react';

const LoadedUserContext = createContext();

const LoadedUserProvider = ({ children, user }) => {
  return(
    <LoadedUserContext.Provider value={user}>
      { children }
    </LoadedUserContext.Provider>
  );
}

export {
  LoadedUserContext,
  LoadedUserProvider
};