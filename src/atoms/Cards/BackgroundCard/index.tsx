import React, { DetailedHTMLProps, ReactNode } from "react";
import "./styles.scss";

interface BackgroundCardProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
}
const BackgroundCard = ({ children }: BackgroundCardProps) => {
  return <div className="card-wrapper">{children}</div>;
};

export default BackgroundCard;
