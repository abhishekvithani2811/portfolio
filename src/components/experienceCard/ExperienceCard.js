import React from "react";
import { Fade } from "react-reveal";
import "./ExperienceCard.css";
import { Link } from "react-router-dom";

function ExperienceCard(props) {
  const experience = props.experience;
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="20px">
      <div className="experience-card-col experience-card-gap">
        <div
          className="experience-card experience-card-1"
          style={{ backgroundColor: experience.color }}
        >
          <div className="experience-company-logo">
            <Link to={experience.company_url}>
              <img
                src={require(`../../assets/images/${experience.logo_path}`)}
                className="featured-image"
                alt={experience.alt_name}
              />
            </Link>
          </div>
          <article
            className="experience-card-body"
            style={{
              backgroundColor: theme.themeColor,
              color: theme.oppositeThemeColor,
            }}
          >
            <header>
              <div className="title">
                <h3 className="justify-end flex">{experience.company}</h3>
              </div>
              <p className="meta my-10">
                <span className="pre-heading">{experience.title}</span>
                <span className="pre-heading02">{experience.location}</span>
                <span className="author">{experience.duration}</span>
              </p>
              <Link to={experience.company_url}>
              <button className="visit-btn02" style={{ backgroundColor: "rgb(227, 64, 95)" }}>Visit Now</button>
              </Link>
              {/* {experience?.description && (
                <ol
                  className="experience-card-description"
                  dangerouslySetInnerHTML={{
                    __html: experience.description,
                  }}
                ></ol>
              )} */}
            </header>
          </article>
        </div>
      </div>
    </Fade>
  );
}

export default ExperienceCard;
