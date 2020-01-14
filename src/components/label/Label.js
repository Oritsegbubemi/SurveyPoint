import React from "react";

const Label = props => {
  const { forLabel } = props;
  return (
    <label className="form-label" htmlFor={forLabel}>
      {props.children}
    </label>
  );
};

export default Label;
