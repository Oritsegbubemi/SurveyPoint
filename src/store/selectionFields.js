import React, { useState } from "react";

export const SelectionContext = React.createContext();

const SingleSelectionProvider = props => {
  // const [fieldCount, setFieldCount] = useState({});

  const [fieldCount, setFieldCount] = useState([]);

  // const incrementFieldCount = (field, key) => {
  //   setFieldCount({ ...fieldCount, [key]: field });
  // };

  const incrementFieldCount = field => {
    setFieldCount([...fieldCount, field]);
  };

  const decrementFieldCount = checkboxName => {
    console.log(1212, fieldCount);

    setFieldCount(
      fieldCount.filter(field => field.props.checkboxName !== checkboxName)
    );
  };

  return (
    <SelectionContext.Provider
      value={{
        fieldCount,
        incrementFieldCount,
        decrementFieldCount
      }}
    >
      {props.children}
    </SelectionContext.Provider>
  );
};

export default SingleSelectionProvider;
