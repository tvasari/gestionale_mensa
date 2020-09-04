import React, { createContext } from 'react';

const LoadedUserContext = createContext();

const LoadedUser = ({ children, utente }) => {
  return(
    <LoadedUserContext value={utente}>
      { children }
    </LoadedUserContext>
  );
}

export default LoadedUser;