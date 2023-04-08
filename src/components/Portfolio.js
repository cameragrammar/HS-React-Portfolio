import React from "react";
import NBAPlayerTrackerImage from "../components/NBAPlayerTracker.JPG";
import WeatherDashboardImage from "../components/WeatherDashboard.JPG";
import NoteTakerImage from "../components/NoteTaker.JPG";

function Portfolio() {
  return (
    <div className="main-container">
      <div className="white-box">
        <div
          className="intro-info"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="portfolio-header">
            <h2>Portfolio</h2>
          </div>
        </div>
        <br />
        <div className="project-container">
          <div className="project-item project-box">
            <a href="https://github.com/cameragrammar/Group-Project-1">
              <img
                src={NBAPlayerTrackerImage}
                alt="Project 1"
                style={{ width: "200px", height: "200px" }}
              />
            </a>
            <div className="project-text">
              <p>NBA Player Tracker</p>
              <a href="https://github.com/cameragrammar/Group-Project-1">
                github repo
              </a>
            </div>
          </div>
          <div className="project-item project-box">
            <a href="https://github.com/cameragrammar/weather-dashboard">
              <img
                src={WeatherDashboardImage}
                alt="Project 2"
                style={{ width: "200px", height: "200px" }}
              />
            </a>
            <div className="project-text">
              <p>Weather Dashboard</p>
              <a href="https://github.com/cameragrammar/weather-dashboard">
                github repo
              </a>
            </div>
          </div>
          <div className="project-item project-box">
            <a href="https://github.com/cameragrammar/Note-Taker-App">
              <img
                src={NoteTakerImage}
                alt="Project 3"
                style={{ width: "200px", height: "200px" }}
              />
            </a>
            <div className="project-text">
              <p>Express.js Note Taker</p>
              <a href="https://github.com/cameragrammar/Note-Taker-App">
                github repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
