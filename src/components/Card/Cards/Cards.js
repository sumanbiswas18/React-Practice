import React, { Component } from "react";
import cssClasses from "../css/Cards.css";

class Cards extends Component {
  render() {
    console.log("[Cards.js] Rendering.......");
    return (
      <div className={cssClasses.Card}>
        <div className={cssClasses.CardHeader}>
          Hey i'm {this.props.name} your card
        </div>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}
export default Cards;
