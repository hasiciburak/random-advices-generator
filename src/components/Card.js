import React, { useLayoutEffect, useState } from "react";
import desktopDivider from "../img/pattern-divider-desktop.svg";
import diceIcon from "../img/icon-dice.svg";
import axios from "axios";
const Card = (props) => {
  const [advice, setAdivce] = useState("");

  const getAdvice = async () => {
    await axios.get("https://api.adviceslip.com/advice").then((res) => {
      setAdivce(res.data.slip);
      console.log(res.data.slip);
    });
  };

  useLayoutEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="card-container">
      <p className="advice-text">ADVICE #{advice.id}</p>
      <p className="quote">{advice.advice}</p>
      <div className="divider-desktop">
        <hr />
        <img src={desktopDivider} className="divider-img" alt="" />
        <hr />
      </div>
      <div className="dice-btn" onClick={() => getAdvice()}>
        <img src={diceIcon} alt="" />
      </div>
    </div>
  );
};

export default Card;
