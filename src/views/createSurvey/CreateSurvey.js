import React, { useContext } from "react";
import "./CreateSurvey.css";
import Button from "../../components/button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SurveyCard from "../../components/surveyCard/SurveyCard";
import RadioQuestion from "../../components/radioQuestion/RadioQuestion";
import CheckboxQuestion from "../../components/checkboxQuestion/CheckboxQuestion";
import { SelectionContext } from "../../store/selectionFields";
import Input from "../../components/input/Input";

const CreateSurvey = () => {
  const { fieldCount, incrementFieldCount, decrementFieldCount } = useContext(
    SelectionContext
  );
  console.log(78, fieldCount);

  let counter = Object.values(fieldCount).length;

  const noSelectedField = (
    <div className="survey-question-help">
      <p>Click on the fields to the left to start</p>
    </div>
  );

  const checkBox = (
    <CheckboxQuestion
      checkboxName={`checkbox-${counter}`}
      removeQuestion={decrementFieldCount}
      checkboxKey={counter}
    />
  );

  const radio = (
    <RadioQuestion radioName={`radio${counter}`} radioKey={counter} />
  );

  const res = Object.values(fieldCount).map((field, index) => {
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
            onClick={() => incrementFieldCount(radio, counter)}
          >
            <span className="selection-icon">
              <FontAwesomeIcon icon="dot-circle" />
            </span>
            Single Selection
          </button>
          <button
            className="selection-button"
            onClick={() => incrementFieldCount(checkBox, counter)}
          >
            <span className="selection-icon">
              <FontAwesomeIcon icon="check-square" />
            </span>
            multiple selection
          </button>
        </section>
      </div>
      <div className="col-md-8 survey-questions-container">
        {/* {result.length ? result.sort() : noSelectedField} */}
        {/* {Object.values(fieldCount) ? fieldCount : noSelectedField} */}
        {/* {Object.values(fieldCount)} */}
        {res}
      </div>
    </section>
  );
};

export default CreateSurvey;
