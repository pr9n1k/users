import { combineReducers } from "redux";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
  user: userReducer,
  // todo: todoReducer
});

export type RootState = ReturnType<typeof rootReducer>;
