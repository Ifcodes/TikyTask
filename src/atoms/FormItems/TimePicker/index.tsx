/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { DetailedHTMLProps, useRef } from "react";
import ClockIcon from "../../vectors/clock-icon";
import "./styles.scss";

interface TimePickerProps
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value: string;
}
const TimePicker = ({ value, ...rest }: TimePickerProps) => {
  const ref = useRef<any>(null);

  return (
    <div className="time-picker-cont" onClick={() => ref.current.showPicker()}>
      <ClockIcon />
      <input
        value={value}
        type="time"
        {...rest}
        placeholder="00:00"
        ref={ref}
      />
    </div>
  );
};

export default TimePicker;
