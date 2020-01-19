import React from "react";
import "./RadioQuestion.css";
import Input from "../input/Input";

const RadioQuestion = props => {
  const { inputName, removeQuestion, submitQuestion } = props;

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
        {/* <label
          // contentEditable="true"
          className="answer-label"
          htmlFor={`answer${inputName}`}
        >
          {`Answer ${index + 1}`}
        </label> */}
        <Input
          key={index + 400}
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
        {radioButton}
      </form>
    </div>
  );
};

export default RadioQuestion;
