import React from "react";
import "./AboutUsContent.css";

const AboutUsContent = props => {
  const { title, customClassName } = props;
  return (
    <div className={`about-us-content ${customClassName}`}>
      <div className="about-us-title">{title}</div>
      <div>{props.children}</div>
    </div>
  );
};

export default AboutUsContent;
