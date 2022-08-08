import { User } from "../types/users";
import { parseName } from "./parseName";

export const parseNameList = (list: User[]) => {
  let str: string = "";
  list.forEach((item, i) => {
    if (i !== 0) {
      str += ", ";
    }
    str += parseName(item.name).name;
  });
  return str;
};
