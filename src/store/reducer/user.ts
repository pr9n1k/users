import { UserState, UserAction, UserActionTypes } from "../../types/users";

const defaultState: UserState = {
  users: [],
  loading: false,
  error: "",
};
export const userReducer = (
  state = defaultState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return { loading: true, error: "", users: [] };
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return { loading: false, error: "", users: action.payload };
    case UserActionTypes.FETCH_USERS_ERROR:
      return { loading: false, error: action.payload, users: [] };

    default:
      return state;
  }
};
