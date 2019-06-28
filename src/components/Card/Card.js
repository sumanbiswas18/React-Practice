import React from "react";
import Cards from "./Cards/Cards";

const Card = props =>
  props.cards.map(card => {
    return (
      <Cards
        name={card.name}
        key={card.id}
        changed={event => props.changed(event, card.id)}
      />
    );
  });

export default Card;
