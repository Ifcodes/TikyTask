import React, { DetailedHTMLProps, ReactNode } from "react";
import "./styles.scss";

interface InputProps
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  icon?: ReactNode;
}
const Input = ({ icon, label, ...rest }: InputProps) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <div className="input-wrapper">
        <input {...rest} />
        {icon && icon}
      </div>
    </div>
  );
};

export default Input;
