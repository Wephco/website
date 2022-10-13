import React, { useState, createContext } from "react";

// initial app states
const initialState = {
  id: "",
  name: "",
  email: "",
  phone: "",
  location: "",
  property: "",
  bedroom: 0,
  budget: "",
  maxBudget: 0.0,
  paymentPlan: "",
  serviceCharge: 0.01,
  isAuthenticated: false,
  isAdmin: false,
  imageUrl: ''
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
