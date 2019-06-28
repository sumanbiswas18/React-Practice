import React, { Component } from "react";
import cssclass from "./App.css";
import FunCard from "../components/Card/Card";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    Card: [
      { id: 1, name: "sanu" },
      { id: 2, name: "chiru" },
      { id: 3, name: "polu" }
    ],
    showCard: false
  };

  toggleCardHanler = () => {
    const cardShow = this.state.showCard;
    this.setState({
      showCard: !cardShow
    });
  };
  nameChangeHandler = (event, id) => {
    const cardIndex = this.state.Card.findIndex(ci => {
      return ci.id === id;
    });

    const cards = { ...this.state.Card[cardIndex] };

    cards.name = event.target.value;

    const card = [...this.state.Card];
    card[cardIndex] = cards;

    this.setState({
      Card: card
    });
  };

  render() {
    let Card = null;
    if (this.state.showCard) {
      Card = (
        <div>
          <FunCard cards={this.state.Card} changed={this.nameChangeHandler} />
        </div>
      );
    }

    return (
      <div className={cssclass.App}>
        <Cockpit
          showCard={this.state.showCard}
          toggle={this.toggleCardHanler}
        />
        {Card}
      </div>
    );
  }
}

export default App;
