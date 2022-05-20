import React, { createContext, useReducer, FC, ReactElement } from "react";
import { userInitialState } from "./initial-state";
import { userReducer } from "./reducer";
export const UserContext = createContext({} as IContextProps);
export const UsersProvider: FC<{ children: ReactElement }> = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, userInitialState);
  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
};
