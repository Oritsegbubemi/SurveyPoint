import React from "react";
import "./Input.css";

/** How to use the components
 * <Input type="text" name="firstName" customClassname="some-class"/>
 */

const Input = props => {
  const {
    customProps,
    customClassName,
    handleBlur,
    handleChange,
    name,
    type
  } = props;

  return (
    <input
      {...customProps}
      onChange={handleChange}
      type={type}
      onBlur={handleBlur}
      className={customClassName}
      name={name}
    />
  );
};

export default Input;
