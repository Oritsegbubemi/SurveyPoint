import React, { Component } from "react";
import "./HomePage.css";
import Button from "../../components/button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AboutUsContent from "../../components/aboutUsContent/AboutUsContent";

class Home extends Component {
  render() {
    return (
      <div>
        <header className="hero-container">
          <div className="hero-banner">
            <div class="hero-text">
              <h1>A simple & powerful online survey tool</h1>
              <p>
                Signup now for free unlimited surveys, questions and responses
              </p>
              <Button customClassName="regular-button get-started-btn">
                Get Started <FontAwesomeIcon icon="arrow-right" />
              </Button>
            </div>
          </div>
        </header>
        <section className="about-us-container">
          <AboutUsContent title="Create">
            {" "}
            Design your survey with our simple tool to make questionnaires using
            various question types
          </AboutUsContent>
          {/* <AboutUsContent
            customClassName="about-us-space"
            title="h"
          ></AboutUsContent> */}
          <AboutUsContent title="Share">
            Post your survey URL on social media, on your website or send it via
            email to collect your answers
          </AboutUsContent>
          {/* <AboutUsContent
            customClassName="about-us-space"
            title="h"
          ></AboutUsContent> */}
          <AboutUsContent title="Analyse">
            Our dashboard will display all the results and statistics with
            simple charts or through data export
          </AboutUsContent>
        </section>
      </div>
    );
  }
}

export default Home;
