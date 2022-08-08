import * as React from "react";

export interface TableCellProps {
  children: string | React.ReactNode;
}

export function TableCell({ children }: TableCellProps) {
  return <td>{children}</td>;
}
