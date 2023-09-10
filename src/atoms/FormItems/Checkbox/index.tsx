import React, { ChangeEvent, DetailedHTMLProps } from "react";
import TickIcon from "../../vectors/tick-icon";
import "./styles.scss";
import clsx from "clsx";

interface CheckBoxProps
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  checked: boolean;
  onChange: (val: ChangeEvent<HTMLInputElement>) => void;
}
const CheckBox = ({ checked, onChange, ...rest }: CheckBoxProps) => {
  return (
    <div className={clsx("checkBox cursor-pointer", checked && "isChecked")}>
      {checked && <TickIcon />}
      <input
        type="checkbox"
        className=" absolute inset-0 opacity-0 cursor-pointer"
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default CheckBox;
