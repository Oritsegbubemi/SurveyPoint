import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./HomePage.css";
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import AboutUsContent from "../../components/aboutUsContent/AboutUsContent";
import Copyright from "../../components/copyright/Copyright";

class Home extends Component {
  onButtonPress() {
    this.props.history.push('/login')
  }

  render() {
    const { sidebarState } = this.props;
    const customClass = sidebarState ? "add-margin" : "";
    return (
      <div>
        <Header>
          <div>
          <Link to="/login" className="btn inverse-button btn-nav mr-5">
            Login
          </Link>{" "}
          <Link to="/signup" className="btn regular-button btn-nav">
            Signup
          </Link>
          </div>
        </Header>
      <div className={`main-page ${customClass}`}>
        <header className="hero-container">
          <div className="hero-banner">
            <div className="hero-text">
              <h1>A simple & powerful online survey tool</h1>
              <p>
                Signup now for free unlimited surveys, questions and responses
              </p>
              <Button customClassName="regular-button get-started-btn btn-200"  onclick={this.onButtonPress.bind(this)}>
                Get Started <FontAwesomeIcon icon="arrow-right" />
              </Button>
            </div>
          </div>
        </header>
        <section className="about-us-container">
          <div className="row mr-0 ml-0">
            <AboutUsContent title="Create">
              {" "}
              Design your survey with our simple tool to make questionnaires
              using various question types
            </AboutUsContent>
            <AboutUsContent
              customClassName="about-us-space"
              title="h"
            ></AboutUsContent>
            <AboutUsContent title="Share">
              Post your survey URL on social media, on your website or send it
              via email to collect your answers
            </AboutUsContent>
            <AboutUsContent
              customClassName="about-us-space"
              title="h"
            ></AboutUsContent>
            <AboutUsContent title="Analyse">
              Our dashboard will display all the results and statistics with
              simple charts or through data export
            </AboutUsContent>
          </div>
        </section>
        <section className="contact-us-container">
          <div className="hero-contact-us">
            <div className="hero-contact-us-text">
              <h1>Contact Us</h1>
              <p>
                <FontAwesomeIcon icon="phone-alt" /> 08123456789
              </p>
              <p>
                <FontAwesomeIcon icon="envelope" /> services@surveypoint.com
              </p>
              <p>
                <FontAwesomeIcon icon="map-marker-alt" /> Lagos, Nigeria
              </p>
            </div>
          </div>
        </section>
        <footer className="row ml-0 mr-0 footer-container">
          <div className="social-media-container">
            <div className="row social-media-div">
              <FontAwesomeIcon
                className="footer-facebook"
                icon={["fab", "twitter"]}
              />
              <FontAwesomeIcon
                className="footer-facebook"
                icon={["fab", "facebook"]}
              />
              <FontAwesomeIcon
                className="footer-facebook"
                icon={["fab", "linkedin"]}
              />
            </div>
          </div>
          <div className="copyright-container">
            <Copyright />
          </div>
          <div className="footer-links">
            <Link>Terms & Privacy</Link>
            <Link>Help</Link>
            <Link>Contact</Link>
          </div>
        </footer>
      </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  sidebarState: state.sidebar.sidebar
});

export default connect(mapStateToProps)(Home);
