import React, { DetailedHTMLProps, ReactNode } from "react";
import "./styles.scss";
import clsx from "clsx";

interface ButtonPropsType
  extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  outlined?: boolean;
  children: ReactNode;
  suffix?: ReactNode;
  className?: string;
}
const Button = ({
  outlined,
  children,
  suffix,
  className,
  ...rest
}: ButtonPropsType) => {
  return (
    <button
      className={clsx("button", className, outlined && "outlined")}
      {...rest}
    >
      {suffix && <span className="suffix">{suffix}</span>}
      {children}
    </button>
  );
};

export default Button;
