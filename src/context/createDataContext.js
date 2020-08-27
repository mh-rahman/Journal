// Will export plain function, hence lowercase starting char in name
// Reusable function automating the setup of context and provider - can be called multiple times in our app. Useful for adding additional functionalities like comments etc.

import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // actions === {addJournal : (dispatch) => a fucntion that does something}
    const boundActions = {};

    for (let action in actions) {
      // key === 'addJournal'
      boundActions[action] = actions[action](dispatch);
    }

    // ...boundActions is spreading or unwrapping the while boundActions object and sending its contents as parameters
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
