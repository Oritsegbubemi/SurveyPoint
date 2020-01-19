import React, { Component } from "react";
import "./CreateSurvey.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RadioQuestion from "../../components/radioQuestion/RadioQuestion";
import CheckboxQuestion from "../../components/checkboxQuestion/CheckboxQuestion";
import Input from "../../components/input/Input";

class CreateSurvey extends Component {
  state = {
    questions: [],
    questionsCount: 0,
    surveyName: ""
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

  submitQuestion = e => {
    e.preventDefault();

    const formData = [...e.target];

    // question the user typed
    const question = e.target[1].value;

    // this is an array of the options the user selected
    const options = formData
      .filter(input => input.className === "answer-label")
      .map(inputValue => inputValue.value);

    // you can run an API here that saves both questions and options when save is clicked
    // there has to be an Id to identify the questions for a particular survey
    console.log(124, question, options);
  };

  handleDocumentName = e => {
    e.preventDefault();
    console.log(e.target.value);

    // this is where I am saving the survey name
    this.setState({ surveyName: e.target.value });
  };

  submitSurvey = e => {
    e.preventDefault();
    const { surveyName } = this.state;

    // you can send request to the backend server saving the survey Name
    // NB there have to be a link with the survey and question so we can be able to
    // fetch the questions for a particular survey
    console.log("docu", surveyName);
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
        submitQuestion={e => this.submitQuestion(e)}
      />
    );

    const radio = (
      <RadioQuestion
        inputName={`radio${questionsCount}`}
        removeQuestion={this.decrementFieldCount}
        submitQuestion={e => this.submitQuestion(e)}
      />
    );

    const displayedQuestions = Object.values(questions).map((field, index) => {
      return <div key={index + 1}>{field}</div>;
    });

    // const submitSurveyBtn = (
    //   <button className="btn btn-success">Submit Survey</button>
    // );

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
              handleChange={this.handleDocumentName}
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
            <button className="selection-button" onClick={this.submitSurvey}>
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
          <form>
            {displayedQuestions.length ? displayedQuestions : noSelectedField}
            {/* <div className="submit-survey-button-container">
              {displayedQuestions.length ? submitSurveyBtn : false}
            </div> */}
          </form>
        </div>
      </section>
    );
  }
}

export default CreateSurvey;
