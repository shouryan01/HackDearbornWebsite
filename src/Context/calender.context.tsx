import React, { createContext, ReactNode, Reducer, useMemo, useReducer } from 'react';
import { Action, ContextType, State } from '../../types/calenderState.types';
import { calenderReducer, initialState } from '../reducers/calender.reducer';

export const calenderContext = createContext<ContextType>(null as any);

interface Props {
  children: ReactNode;
}

export const CalenderContextProvider: React.FC<Props> = ({children}) => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    calenderReducer,
    initialState
  );
  const value: ContextType = useMemo(
    () => ({
      state,
      dispatch
    }),
    [state]
  );

  return (
    <calenderContext.Provider value={value}>
      {children}
    </calenderContext.Provider>
  );
};
