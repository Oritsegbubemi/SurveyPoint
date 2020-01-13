import React, { Component } from "react";
import "./CreateSurvey.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RadioQuestion from "../../components/radioQuestion/RadioQuestion";
import CheckboxQuestion from "../../components/checkboxQuestion/CheckboxQuestion";
import Input from "../../components/input/Input";

class CreateSurvey extends Component {
  state = {
    questions: [],
    questionsCount: 0
  };

  incrementFieldCount = (question, key) => {
    const { questions, questionsCount } = this.state;
    const updatedQuestions = [...questions, question];

    this.setState({
      questions: updatedQuestions,
      questionsCount: questionsCount + 1
    });
  };

  decrementFieldCount = inputName => {
    const { questions } = this.state;

    const filteredQuestions = questions.filter(
      question => question.props.inputName !== inputName
    );

    this.setState({ questions: filteredQuestions });
  };

  render() {
    const { questions, questionsCount } = this.state;

    const noSelectedField = (
      <div className="survey-question-help">
        <p>Click on the fields to the left to start</p>
      </div>
    );

    const checkBox = (
      <CheckboxQuestion
        inputName={`checkbox-${questionsCount}`}
        removeQuestion={this.decrementFieldCount}
        checkboxKey={questionsCount}
      />
    );

    const radio = (
      <RadioQuestion
        inputName={`radio${questionsCount}`}
        removeQuestion={this.decrementFieldCount}
      />
    );

    const displayedQuestions = Object.values(questions).map((field, index) => {
      return <div key={index + 1}>{field}</div>;
    });

    return (
      <section className="row">
        <div className="col-md-4 selection-container">
          <section>
            <h3>Document Name</h3>
            <Input
              type="text"
              name="documentName"
              customClassName="dashboard-search survey-question-input"
              placeHolder="Survey Name"
            />
          </section>
          <section>
            <h3>Actions</h3>
            <button className="selection-button">
              <span className="selection-icon">
                <FontAwesomeIcon icon="arrow-left" />
              </span>
              Exit
            </button>
            <button className="selection-button">
              <span className="selection-icon">
                <FontAwesomeIcon icon="arrow-down" />
              </span>
              Save
            </button>
          </section>
          <section>
            <h3>Choice Based</h3>
            <button
              className="selection-button"
              onClick={() =>
                this.incrementFieldCount(radio, `checkbox-${questionsCount}`)
              }
            >
              <span className="selection-icon">
                <FontAwesomeIcon icon="dot-circle" />
              </span>
              Single Selection
            </button>
            <button
              className="selection-button"
              onClick={() =>
                this.incrementFieldCount(checkBox, `checkbox-${questionsCount}`)
              }
            >
              <span className="selection-icon">
                <FontAwesomeIcon icon="check-square" />
              </span>
              multiple selection
            </button>
          </section>
        </div>
        <div className="col-md-8 survey-questions-container">
          {displayedQuestions.length ? displayedQuestions : noSelectedField}
        </div>
      </section>
    );
  }
}

export default CreateSurvey;
