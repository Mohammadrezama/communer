import { useContext } from "react";
import { UserContext, UserTypes } from "providers";
export const useUser = () => {
  const { userState, userDispatch } = useContext(UserContext);
  return {
    userState: userState,
    onAddUser: (payload: IUser) => {
      userDispatch({ payload, type: UserTypes.ON_ADD_USER });
    },
  };
};
