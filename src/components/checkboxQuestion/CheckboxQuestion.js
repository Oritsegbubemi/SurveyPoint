import React from "react";
import "./CheckboxQuestion.css";
import Input from "../input/Input";

const CheckboxQuestion = props => {
  const { inputName, removeQuestion, submitQuestion } = props;

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
        <Input
          key={index + 200}
          type="text"
          name={`option${inputName}`}
          customClassName="answer-label"
          placeHolder="Type your options..."
          id={`answer${index + 1}`}
        />
      </div>
    );
  }
  return (
    <div className="survey-question">
      <form onSubmit={submitQuestion}>
        <span
          onClick={() => removeQuestion(inputName)}
          className="top-right btn btn-danger"
        >
          cancel
        </span>
        <button className="top-right-save btn btn-success">save</button>
        <div className="survey-question-input-container">
          <Input
            type="text"
            name="question"
            customClassName="dashboard-search survey-question-input"
            placeHolder="Type your question here..."
          />
        </div>
        {checkbox}
      </form>
    </div>
  );
};

export default CheckboxQuestion;
