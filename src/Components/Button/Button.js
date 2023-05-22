import React from "react";
import "./Button.scss";

const Button = ({ variant, onClick, children }) => {
  const className = `button ${variant}`;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
