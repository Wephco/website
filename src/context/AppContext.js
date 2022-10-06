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
};

// create context
export const AppContext = createContext();

// load saved state from session storage
// const loadState = () => {
//   try {
//     const serializedState = sessionStorage.getItem("state");
//     if (serializedState === null) {
//       return undefined;
//     }
//     return JSON.parse(serializedState);
//   } catch (error) {
//     return undefined;
//   }
// };

// const storedState = loadState();

export const AppProvider = (props) => {
  const [appState, setAppState] = useState(initialState);

  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      {props.children}
    </AppContext.Provider>
  );
};
