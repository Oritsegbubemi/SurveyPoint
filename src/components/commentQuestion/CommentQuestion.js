import React from "react";
import "./CommentQuestion.css";
import Input from "../input/Input";

const CommentQuestion = props => {
  const { inputName, removeQuestion, submitQuestion } = props;
  const comment = [];
  const commentCount = 1;
  for (let index = 0; index < commentCount; index++) {
    comment.push(
      <div key={index + 1} className="custom-control custom-radio">
        <textarea
          key={index + 200}
          //type="text"
          name={`option${inputName}`}
          customClassName="answer-label"
          placeHolder="Enter your Comment..."
          id={`answer${index + 1}`}
        />
      </div>
    );
  }
  return (
    <div className="survey-question">
      <form onSubmit={submitQuestion}>
        <button className="top-right-save btn btn-success">
          save
        </button>
        <button onClick={() => removeQuestion(inputName)} className="top-right btn btn-danger">
          cancel
        </button>
        <div className="survey-question-input-container">
          <Input
            type="text"
            name="question"
            customClassName="dashboard-search survey-question-input"
            placeHolder="Type your question here..."
          />
        </div>
        {comment}
      </form>
    </div>
  );
};

export default CommentQuestion;
