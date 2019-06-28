import React from "react";
import cssClasses from "./css/Cards.css";

const Cards = props => {
  return (
    <div className={cssClasses.Card}>
      <div className={cssClasses.CardHeader}>
        Hey i'm {props.name} your card
      </div>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};
export default Cards;
