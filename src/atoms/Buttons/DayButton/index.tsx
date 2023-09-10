import React, { DetailedHTMLProps } from "react";
import "./styles.scss";
import clsx from "clsx";

interface DayButtonPropsType
  extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isActive?: boolean;
  day: string;
  date: string;
}
const DayButton = ({ isActive, day, date, ...rest }: DayButtonPropsType) => {
  return (
    <button className={clsx("day-button", isActive && "active")} {...rest}>
      <span>{day}</span>
      <span>{date}</span>
    </button>
  );
};

export default DayButton;
