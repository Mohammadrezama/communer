import { userInitialState } from "./initial-state";
import { UserTypes } from "./types";
import { clone } from "ramda";

export const userReducer = (
  state = userInitialState,
  { payload, type }: { payload: IUser; type: string }
): IUserState => {
  let clonedUsers = clone(state.users);
  switch (type) {
    case UserTypes.ON_ADD_USER:
      clonedUsers && clonedUsers.push(payload);
      return {
        ...state,
        users: clonedUsers,
      };
    default:
      return state;
  }
};
