import React from "react";
import "./css/Cards.css";

const Cards = props => {
  return (
    <div className="Card">
      <div className="Card-header">Hey i'm {props.name} your card</div>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};
export default Cards;
