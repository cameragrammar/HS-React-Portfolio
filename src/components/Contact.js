import React from "react";
import gmailIcon from "./gmail-icon.png";
import githubIcon from "./github-icon.png";
import linkedinIcon from "./linkedin-icon.png";
import soundcloudIcon from "./soundcloud-icon.png";

function Contact() {
  return (
    <div className="container">
      <div className="white-box">
        <div
          className="intro-info"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p className="contact">
            <h2>Contact Me</h2>
            <br />
          </p>
          <div className="icon-container">
            <a href="mailto:hshen801@gmail.com" target="_blank">
              <img className="icon" src={gmailIcon} alt="Gmail Icon" />
            </a>
            <a href="https://github.com/cameragrammar" target="_blank">
              <img className="icon" src={githubIcon} alt="GitHub Icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/hans-shen-84724018"
              target="_blank"
            >
              <img className="icon" src={linkedinIcon} alt="LinkedIn Icon" />
            </a>
            <a href="https://soundcloud.com/cameragrammar" target="_blank">
              <img
                className="icon"
                src={soundcloudIcon}
                alt="SoundCloud Icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
