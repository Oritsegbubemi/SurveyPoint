import React from "react";
import "./Button.css";

const Button = props => {
  const { customClassName } = props;
  return (
    <button type="button" className={`btn ${customClassName}`}>
      {props.children}
    </button>
  );
};

export default Button;
