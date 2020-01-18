import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SurveyCard.css";
import { Link } from 'react-router-dom';

const SurveyCard = ({onclick}) => {
  return (
    <div className="new-survey-card">
     
        <p>Create New</p>
        <div>
        <Link to="/new-survey">
          <FontAwesomeIcon icon="plus-circle" />
        </Link>
        </div>
      
    </div>
  );
};

export default SurveyCard;
