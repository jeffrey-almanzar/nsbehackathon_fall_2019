import React from "react";

function Join(props) {
  return (
    <div>
      <div id="join" className="form">
        <h2 className="section-sub-heading">Join Us</h2>
        <div className="form-input_container">
          <input placeholder="Name" />
          <input placeholder="Last Name" />
          <input placeholder="Email" />
          <input placeholder="Password" />
          <button className="search-btn form-submit">Join</button>
        </div>
      </div>
    </div>
  );
}

export default Join;
