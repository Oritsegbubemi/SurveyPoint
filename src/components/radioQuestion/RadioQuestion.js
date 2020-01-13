import React from "react";
import "./RadioQuestion.css";
import Input from "../input/Input";

const RadioQuestion = props => {
  const { inputName, removeQuestion } = props;

  const radioButton = [];
  const radioButtonCount = 3;
  for (let index = 0; index < radioButtonCount; index++) {
    radioButton.push(
      <div key={index + 100} className="custom-control custom-radio">
        <Input
          key={index + 1}
          type="radio"
          name={`answer${inputName}`}
          customClassName="answer-radio"
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
      {radioButton}
    </div>
  );
};

export default RadioQuestion;
