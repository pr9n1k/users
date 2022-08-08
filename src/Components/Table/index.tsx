import * as React from "react";
import { User } from "../../types/users";
import { TableFooter } from "./Footer";
import { TableHeader } from "./Header";
import { TableRow } from "./Row";

export interface TableProps {
  users: User[];
}
export function Table({ users }: TableProps) {
  // флаг для всех
  const [allChecked, setAllChecked] = React.useState<boolean>(false);
  //список выбранных пользователей
  const [checkedUser, setCheckedUser] = React.useState<User[]>([]);
  //чекбокс главный
  const [checkboxHeader, setCheckboxHeader] = React.useState<boolean>(false);

  //обработчик главного чекбокса
  const onChangeHeader = () => {
    setCheckboxHeader(!checkboxHeader);
    //Устанавливаем новое значение всем чекбоксам
    setAllChecked(!checkboxHeader);
    //меняем список все/никто
    if (!checkboxHeader) {
      setCheckedUser(users);
    } else {
      setCheckedUser([]);
    }
  };
  //Обработчик нажатия на чекбокс
  const onChange = (checked: boolean, user: User) => {
    if (checked) {
      setCheckedUser([...checkedUser, user]);
      if (checkedUser.length + 1 === users.length) {
        setCheckboxHeader(true);
        setAllChecked(true);
      }
    } else {
      setCheckedUser(checkedUser.filter((item) => item.id !== user.id));
      setCheckboxHeader(false);
    }
  };
  return (
    <>
      <table className="table">
        <TableHeader checked={checkboxHeader} onChange={onChangeHeader} />
        <tbody>
          {users.map((item) => {
            return (
              <TableRow
                key={item.id}
                user={item}
                allChecked={allChecked}
                onHandler={onChange}
                checkboxHeader={checkboxHeader}
              />
            );
          })}
        </tbody>
      </table>
      <TableFooter users={checkedUser} />
    </>
  );
}
