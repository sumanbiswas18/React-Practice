import React, { Component } from "react";
import "./App.css";

import Cards from "./Card/Cards";

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
    const btnStyle = {
      padding: "6px",
      backgroundColor: "rgb(82, 167, 103)",
      color: "aliceblue",
      cursor: "pointer"
    };

    let Card = null;
    if (this.state.showCard) {
      Card = (
        <div>
          {this.state.Card.map(card => {
            return (
              <Cards
                name={card.name}
                key={card.id}
                changed={event => this.nameChangeHandler(event, card.id)}
              />
            );
          })}
        </div>
      );
      btnStyle.backgroundColor = "darkred";
    }

    return (
      <div className="App">
        <h3>Perss this button to see Changes</h3>
        <button style={btnStyle} onClick={this.toggleCardHanler}>
          Change
        </button>
        {Card}
      </div>
    );
  }
}

export default App;
