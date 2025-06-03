import React, { useState } from "react";
import "./GamePopUp.scss";
import PropTypes from "prop-types";
import Restart from "../Restart/Restart";

function GamePopUp({ win, score, turns, finished }) {
  const [visible, setVisible] = useState(true);
  const closePopup = () => {
    setVisible(false);
  };
  if (!visible) return null;
  return (
    <div
      className="popup-container"
      onClick={closePopup}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          closePopup();
        }
      }}
    >
      <div className="popup-content">
        {/* Win Condition */}
        {win === true && (
          <>
            <h1 className="popup-title win-title">Victory!</h1>
            <h2 className="popup-subtitle">Congratulations!</h2>
            <div className="popup-icon">
              <img
                alt="Victory logo"
                className="popup-logo"
                src="./src/assets/logo.png"
              />
              <div className="confetti" />
            </div>
          </>
        )}

        {/* Lose Condition */}
        {win === false && finished && (
          <>
            <h1 className="popup-title lose-title">Game Over</h1>
            <h2 className="popup-subtitle">Better luck next time!</h2>
            <div className="popup-icon">
              <img
                alt="Game logo"
                className="popup-logo"
                src="./src/assets/logo.png"
              />
            </div>
          </>
        )}

        {/* Shared Stats */}
        {(win === true || (win === false && finished)) && (
          <div className="popup-stats">
            <div className="stat-item">
              <span className="stat-label">Score:</span>
              <span className="stat-value">{score}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Turns:</span>
              <span className="stat-value">{turns}</span>
            </div>
          </div>
        )}

        <Restart />
      </div>
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
