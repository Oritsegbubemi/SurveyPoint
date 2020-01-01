import React, { useContext } from "react";
import "./Dashboard.css";
import SurveyCard from "../../components/surveyCard/SurveyCard";
import ExistingSurveyCard from "../../components/surveyCard/existingSurveyCard";
import { Context } from "../../store/context";
import Input from "../../components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboard = () => {
  const { sidebar } = useContext(Context);
  const customClass = sidebar.openSidebar ? "add-margin" : "";

  return (
    <div className={`main-page ${customClass}`}>
      <div className="ml-4">
        <Input type="text" name="search" customClassName="dashboard-search" />
        <FontAwesomeIcon icon="search" />
      </div>
      <div className="survey-card-container">
        <SurveyCard />
        <ExistingSurveyCard surveyTitle="Best Restaurant" />
      </div>
    </div>
  );
};

export default Dashboard;
