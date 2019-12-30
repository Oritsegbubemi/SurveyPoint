import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SurveyCard.css";

const existingSurveyCard = (props) => {
  const {surveyTitle} = props;
  return (
    <div className="existing-survey-card">
      <p>{surveyTitle}</p>
      <div className="survey-card-icon">
        <FontAwesomeIcon icon="pencil-alt" />
        <FontAwesomeIcon icon="trash-alt" />
      </div>
    </div>
  );
};

export default existingSurveyCard;
