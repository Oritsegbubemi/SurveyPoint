import React from "react";
import "./CheckboxQuestion.css";
import Input from "../input/Input";

const CheckboxQuestion = props => {
  const { inputName, removeQuestion } = props;
  
  const checkbox = [];
  const checkboxCount = 4;
  for (let index = 0; index < checkboxCount; index++) {
    checkbox.push(
      <div key={index + 1} className="">
        <Input
          key={index + 1}
          type="checkbox"
          name={`answer${inputName}`}
          customClassName=""
        />
        <label
          // contentEditable="true"
          className="answer-label"
          htmlFor={`answer${inputName}`}
        >
          {`Answer ${index + 1}`}
        </label>
      </div>
    );
  }
  return (
    <div className="survey-question">
      <span onClick={() => removeQuestion(inputName)} className="top-right">
        cancel
      </span>
      <div className="survey-question-input-container">
        <Input
          type="text"
          name="question"
          customClassName="dashboard-search survey-question-input"
          placeHolder="Type your question here..."
        />
      </div>
      {checkbox}
    </div>
  );
};

export default CheckboxQuestion;
