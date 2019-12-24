import React from "react";
import "./AboutUsContent.css";

const AboutUsContent = props => {
  const { title, customClassName } = props;
  return (
    
      <div className={`col-sm about-us-content ${customClassName}`}>
        <div className="about-us-title">{title}</div>
        <div className="about-us-content-container">
         <div className={`about-us-details ${customClassName}`}>{props.children}</div>
        </div>
    </div>
  );
};

export default AboutUsContent;
