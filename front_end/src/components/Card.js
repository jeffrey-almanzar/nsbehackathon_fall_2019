import React from "react";
import PlaceHolderImg from '../assets/placeholder.png';

function Card(props) {
  return (
    <div className="card-container">
      <div>
        <img src={PlaceHolderImg} alt="" width="150px" height="150px" />
      </div>

      <div className="card-address">
        <h2>{props.name}</h2>
        <p>{props.address}</p>
      </div>
    </div>
  );
}

export default Card;
