import * as React from "react";
import { User } from "../../types/users";
import { parseNameList } from "./../../utils/parseNameList";

export interface TableFooterProps {
  users: User[];
}

export function TableFooter({ users }: TableFooterProps) {
  if (!users.length) {
    return <p>Пользователи не выбраны</p>;
  }
  const str = parseNameList(users);
  return <p>Пользователи: {str}</p>;
}
