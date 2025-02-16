import React from "react";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
import "./Footer.css";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
        Dedication by {greeting.full_name} | © 2024 All rights reserved.
        </p>
      </Fade>
    </div>
  );
}
