import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./Countdown.scss";

const renderTime = ({ remainingTime }) => {
  return (
    <div className="timer">
      <div className="value">{remainingTime}</div>
    </div>
  );
};

function Countdown() {
  return (
    <div className="timer-wrapper">
      <CountdownCircleTimer
        className="timeCircle"
        isPlaying
        duration={5}
        colors={["#fefe4d", "#fefe4d", "#feb74d", "f19101"]}
        colorsTime={[10, 6, 3, 0]}
        onComplete={() => ({ shouldRepeat: true, delay: 1 })}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
}

export default Countdown;
