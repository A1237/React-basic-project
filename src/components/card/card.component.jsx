import React from "react";

import "./card.component.css";

const Card = props => {
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      />
      <h1>{props.monster.name}</h1>
      <p>
        <strong>{props.monster.email}</strong>
      </p>
    </div>
  );
};

export default Card;
