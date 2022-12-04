import React, { useState, createContext } from "react";

// initial app states
const initialState = {
  name: "",
  email: "",
  phone: "",
  isAuthenticated: false,
  isAdmin: false,
  imageUrl: '',
  tabEventKey: 'first'
};

// create context
export const AppContext = createContext();

export const AppProvider = (props) => {
  const [appState, setAppState] = useState(initialState);

  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      {props.children}
    </AppContext.Provider>
  );
};
