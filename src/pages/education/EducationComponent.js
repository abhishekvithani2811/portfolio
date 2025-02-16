import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Educations from "../../containers/education/Educations";
import EducationImg from "./EducationImg";
import { Fade } from "react-reveal";
import "./EducationComponent.css";
import Experience from "../experience/Experience";

function Education(props) {
  const theme = props.theme;
  return (
    <div className="education-main">
      <Header theme={props.theme} setTheme={props.setTheme} />
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              <EducationImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Education
              </h1>
              <h3 className="heading-sub-text my-2" style={{ color: theme.text }}>
                Basic Qualification and Certifications
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                I actively participate in tech-related activities. Below are
                some of my major certifications.
              </p>
            </div>
          </div>
        </Fade>
        <Educations theme={props.theme} />
        {/* <Certifications theme={props.theme} /> */}
        <Fade bottom duration={2000} distance="40px">
          <Experience theme={props.theme} />
        </Fade>
      </div>
      <Footer theme={props.theme} />
    </div>
  );
}

export default Education;
