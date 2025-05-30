import React from "react";
import "./GamePopUp.scss";
import PropTypes from "prop-types";
import Restart from "../Restart/Restart";

function GamePopUp({ win, score, turns, finished }) {
  if (win === true)
    return (
      <div className="popup">
        <h1 className="win-title">Game Win !</h1>
        <h2 className="win-under">You Win !</h2>
        <img alt="logo" className="logo-popup" src=".\src\assets\logo.png" />
        <div className="stats">
          <h3 className="score-popup">Score : {score}</h3>
          <h3 className="turns-popup">Turns : {turns}</h3>
        </div>
        <Restart />
      </div>
    );
  if (win === false && finished)
    return (
      <div className="popup">
        <h1 className="lose-title">Game Over !</h1>
        <h2 className="lose-under">You Lose !</h2>
        <img alt="logo" className="logo-popup" src=".\src\assets\logo.png" />
        <div className="stats">
          <h3 className="score-popup">Score : {score}</h3>
          <h3 className="turns-popup">Turns : {turns}</h3>
        </div>
        <Restart show />
      </div>
    );
}
export default GamePopUp;
GamePopUp.propTypes = {
  win: PropTypes.bool.isRequired,
  finished: PropTypes.bool.isRequired,

  score: PropTypes.number.isRequired,
  turns: PropTypes.number.isRequired,
};
