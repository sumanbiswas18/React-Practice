import React, { Component } from "react";
import Cards from "./Cards/Cards";

class Card extends Component {
  static getDrivedStateFromProps(props, state) {
    console.log("[card.js] getDrivedStateFromProps.....", props);
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[card.js] shouldComponentUpdate.....");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[card.js] getSnapshotBeforeUpdate.....");
    return { message: "beforeSnapShot" };
  }

  componentDidUpdate() {
    console.log("[card.js] componentDidUpdate.....");
  }

  render() {
    console.log("[Card.js] rendering.........");
    return this.props.cards.map(card => {
      return (
        <Cards
          name={card.name}
          key={card.id}
          changed={event => this.props.changed(event, card.id)}
        />
      );
    });
  }
}
export default Card;
