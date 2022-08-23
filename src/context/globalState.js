import React, { createContext, useReducer } from 'react';
import AppReducer from '../context/AppReducer';

const initialState = {
  transactions: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //DELETE TRANSACTION
  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  };

  //ADD TRANSACTION
  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
