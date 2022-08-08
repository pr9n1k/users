import React from "react";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const style = props.type === "checkbox" ? "checkbox" : "";
  return (
    <input
      ref={ref}
      {...props}
      className={`${props.className + " " ?? ""}${style}`}
    />
  );
});
Input.displayName = "Input";
export default Input;
