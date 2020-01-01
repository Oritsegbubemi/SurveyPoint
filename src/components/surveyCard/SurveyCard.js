import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SurveyCard.css";

const SurveyCard = () => {
  return (
    <div className="new-survey-card">
      <p>Create New</p>
      <div>
        <FontAwesomeIcon icon="plus-circle" />
      </div>
    </div>
  );
};

export default SurveyCard;
