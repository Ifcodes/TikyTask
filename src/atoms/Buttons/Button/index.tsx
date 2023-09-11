import React, { DetailedHTMLProps, ReactNode } from "react";
import "./styles.scss";
import clsx from "clsx";
import { CircularProgress } from "@mui/material";

interface ButtonPropsType
  extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  outlined?: boolean;
  children: ReactNode;
  suffix?: ReactNode;
  prefixIcon?: ReactNode;
  className?: string;
  loading?: boolean;
}
const Button = ({
  outlined,
  children,
  suffix,
  prefixIcon,
  className,
  loading,
  ...rest
}: ButtonPropsType) => {
  return (
    <button
      className={clsx(
        "button",
        className,
        outlined || loading ? "outlined" : ""
      )}
      {...rest}
    >
      {loading && <CircularProgress size={16} />}
      {prefixIcon && !loading && <span className="prefix">{prefixIcon}</span>}
      {!loading && children}
      {suffix && !loading && <span className="suffix">{suffix}</span>}
    </button>
  );
};

export default Button;
