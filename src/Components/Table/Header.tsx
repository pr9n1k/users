import * as React from "react";
import Input from "../UI/Input";

export interface TableHeaderProps {
  checked?: boolean;
  onChange?: () => void;
}

export function TableHeader({ checked, onChange }: TableHeaderProps) {
  return (
    <thead>
      <tr>
        <th>
          <label htmlFor="all"></label>
          <Input
            type="checkbox"
            onChange={onChange}
            checked={checked}
            id="all"
          />
        </th>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Email</th>
      </tr>
    </thead>
  );
}
