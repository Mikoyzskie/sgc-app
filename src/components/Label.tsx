import React from "react";

type Properties = {
  controlId: string;
  text: string;
  isImportant?: boolean;
};

const Label: React.FC<Properties> = ({ controlId, text, isImportant }) => {
  return (
    <label htmlFor={controlId} className="text-sm">
      {text}
      {isImportant ? <sup>*</sup> : ""}
    </label>
  );
};

export { Label };
