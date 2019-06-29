import React, { Component } from "react";
import cssclass from "./App.css";
import FunCard from "../components/Card/Card";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  // calling constructor
  constructor(props) {
    super(props);
    console.log("[App.js] constructor.... ");
  }

  // setting state
  state = {
    Card: [
      { id: 1, name: "sanu" },
      { id: 2, name: "chiru" },
      { id: 3, name: "polu" }
    ],
    showCard: false
  };

  static getDriveStateFromProps(props, state) {
    console.log("[App.js] getDriveStateFromProps...", props);
    return state;
  }
  componentDidMount() {
    console.log("[App.js] compinentDidMount....");
  }
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
    console.log("[App.js] Rendering.....");
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
          title={this.props.title}
          showCard={this.state.showCard}
          toggle={this.toggleCardHanler}
        />
        {Card}
      </div>
    );
  }
}

export default App;
