import React, { useEffect } from "react";
import css from "./Cockpit.css";

const Cockpit = props => {
  useEffect(() => {
    console.log("[Cockpit.js] useeffect...");
    setTimeout(() => {
      alert("your data saved");
    }, 1000);
  }, [props.Card]);

  let btnStyle = css.btn;

  if (props.showCard) {
    btnStyle = css.btnRed;
  }

  return (
    <div>
      <h3>{props.title}</h3>
      <p>
        This project is based on React.js and this project is for learning and
        practiceing
      </p>
      <button className={btnStyle} onClick={props.toggle}>
        Change
      </button>
    </div>
  );
};

export default Cockpit;
