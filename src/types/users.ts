export enum UserActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

export type User = {
  id: number;
  name: string;
  email: string;
};

export interface UserState {
  users: User[];
  loading: boolean;
  error: string;
}

interface FetchUsersAction {
  type: UserActionTypes.FETCH_USERS;
}
interface FetchUsersSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: User[];
}
interface FetchUsersErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

export type UserAction =
  | FetchUsersAction
  | FetchUsersSuccessAction
  | FetchUsersErrorAction;
