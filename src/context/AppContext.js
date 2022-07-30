import React, { useState, createContext, useEffect } from "react";

// initial app states
const initialState = {
  id: "",
  name: "",
  email: "",
  phone: "",
  location: "",
  property: "",
  bedroom: 0,
  budget: "0",
  paymentPlan: "",
  isAuthenticated: false,
  isAdmin: false,
};

// create context
export const AppContext = createContext(initialState);

// load saved state from session storage
const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

const storedState = loadState();

export const AppProvider = (props) => {
  const [appState, setAppState] = useState(storedState || initialState);

  // function to update state
  const changeState = (state, value) => {
    setAppState({
      ...appState,
      [state]: value,
    });
  };

  // save state to session when there's a change
  useEffect(() => {
    sessionStorage.setItem("state", JSON.stringify(appState));
  }, [appState]);

  return (
    <AppContext.Provider value={{ appState, changeState }}>
      {props.children}
    </AppContext.Provider>
  );
};
