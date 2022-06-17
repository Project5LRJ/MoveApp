import React, { useState, createContext } from "react";

export const AppStateContext = createContext();

const AppStateContextProvider = props => {
  const [appState, setAppState] = useState({
    accessToken: ""
  });

  const [actions, setActions] = useState({
	changeToken: token => setAppState({...appState, accessToken: token})
  });
  
  return <AppStateContext.Provider value={{ appState, actions }}>{props.children}</AppStateContext.Provider>;
};

export default AppStateContextProvider;