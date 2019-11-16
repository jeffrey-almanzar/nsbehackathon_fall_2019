import React from "react";

function Join(props) {
  return (
    <div>
      <div id="join" className="form">
        <h2 className="section-sub-heading">Join Us</h2>
        <p> Donors Volunteers Partners </p>
        <div className="form-input_container">
          <input id="name" placeholder="Name" />
          <input id="lastname" placeholder="Last Name" />
          <input id="email" placeholder="Email" />
          <button onClick={props.join} className="search-btn form-submit">Join</button>
        </div>
      </div>
    </div>
  );
}

export default Join;
