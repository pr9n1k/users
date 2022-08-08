import * as React from "react";
import { User } from "../../types/users";
import { parseName } from "../../utils/parseName";
import Input from "../UI/Input";
import { TableCell } from "./Cell";

export interface TableRowProps {
  user: User;
  allChecked: boolean;
  checkboxHeader: boolean;
  onHandler: (checked: boolean, user: User) => void;
}

export function TableRow({
  user,
  allChecked,
  onHandler,
  checkboxHeader,
}: TableRowProps) {
  const [checked, setChecked] = React.useState<boolean>(false);
  const style = checked ? "table__row--ckecked" : "";
  const fullname = parseName(user.name);
  React.useEffect(() => {
    if (checkboxHeader) {
      setChecked(true);
    }
    if (!allChecked) {
      setChecked(false);
    }
  }, [allChecked, checkboxHeader]);
  const onChange = () => {
    setChecked(!checked);
    onHandler(!checked, user);
  };
  return (
    <tr className={`${style} `}>
      <TableCell>
        <label htmlFor={user.id.toString()}></label>
        <Input
          type="checkbox"
          id={user.id.toString()}
          checked={checked}
          onChange={onChange}
        />
      </TableCell>
      <TableCell>{fullname.name}</TableCell>
      <TableCell>{fullname.surname}</TableCell>
      <TableCell>{user.email}</TableCell>
    </tr>
  );
}
