import React from "react";

function Footer(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
