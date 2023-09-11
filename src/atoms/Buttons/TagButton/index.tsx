import React, { ReactNode } from "react";

interface TagButtonProps {
  icon: ReactNode;
  text: string;
}
const TagButton = ({ icon, text }: TagButtonProps) => {
  return (
    <div className="flex items-center rounded-lg border border-solid border-gray-300 px-2 py-2">
      <div>{icon}</div>
      <div className="ml-2 text-[0.875rem] text-gray-500">{text}</div>
    </div>
  );
};

export default TagButton;
