import React, { createContext, useState, useContext } from 'react';

// Create a Context
const MyContext = createContext();

// Create a Provider component
export const MyProvider = ({ children }) => {
  const [state, setState] = useState(/* initial state */);

  // Define any functions you need to update state
  const updateState = (newState) => {
    setState(newState);
  };

  return (
    <MyContext.Provider value={{ state, updateState }}>
      {children}
    </MyContext.Provider>
  );
};

// Create a custom hook to use the context
export const useMyContext = () => {
  return useContext(MyContext);
};


/* use this code for calling this context in component.
// YourComponent.js
import React from 'react';
import { useMyContext } from './MyContext';

const YourComponent = () => {
  const { state, updateState } = useMyContext();

  const handleChange = () => {
    updateState( new state value );
  };

  return (
    <div>
      <p>State: {state}</p>
      <button onClick={handleChange}>Change State</button>
    </div>
  );
};

export default YourComponent; */