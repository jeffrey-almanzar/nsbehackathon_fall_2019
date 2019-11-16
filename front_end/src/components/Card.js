import React from "react";
import PlaceHolderImg from '../assets/location.png';

function Card(props) {
  return (
    <div className="card-container">
      <div>
        <img src={PlaceHolderImg} alt="" width="150px" height="150px" />
      </div>

      <div className="card-address">
        <h2>{props.name}</h2>
        <address className="card-address-p">{props.address}</address>
        <span>{props.phone}</span>
      </div>
    </div>
  );
}

export default Card;
