import React from "react";
import "../../styles/common/Stay.css";

const Stay = (props) => {
  return (
    <div className="stay">
      <img src={props.image} alt={props.title} />
      <div className="stay-info">
        <div className="stay-info__details">
          {props.superhost && <div className="superhost">Super host</div>}
          <div className="stay-type">
            {props.type}
            {props.beds && ` . ${props.beds} beds`}
          </div>
          <div className="rating">
            <span className="material-icons rating-icon">star_rate</span>
            <span className="rating-number">{props.rating}</span>
          </div>
        </div>
        <div className="stay__title">{props.title}</div>
      </div>
    </div>
  );
};

export default Stay;
