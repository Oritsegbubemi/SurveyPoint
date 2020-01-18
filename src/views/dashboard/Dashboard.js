import React from "react";
import "./Dashboard.css";
import SurveyCard from "../../components/surveyCard/SurveyCard";
import Navbar2 from "../../components/navbar2/Navbar2";
import ExistingSurveyCard from "../../components/surveyCard/existingSurveyCard";
import Input from "../../components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fire from '../../config/Fire';
import { connect } from "react-redux";

const Dashboard = props => {
  const { sidebarState } = props;
  const customClass = sidebarState ? "add-margin" : "";

  return (
    <div>
      <Navbar2 />
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
    </div>
  );
};

export const mapStateToProps = state => ({
  sidebarState: state.sidebar.sidebar
});

export default connect(mapStateToProps)(Dashboard);
