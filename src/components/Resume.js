import React from "react";
import myResume from "./Hans-Shen.pdf";

const styles = {
  center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto",
  },
};

export default function Resume() {
  const download = () => {
    window.open(myResume, "_blank");
  };

  return (
    <div className="container">
      <div className="white-box">
        <div className="intro-info" style={styles.center}>
          <div style={styles.marginBottom}>
            <h2>Resume</h2>
            <br />
            <h3>View and Download my Resume Here</h3>
            <button className="btn btn-primary" onClick={download}>
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
