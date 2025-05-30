import React, { useEffect } from "react";
import "./StopWatch.scss";
import PropTypes from "prop-types";

function StopWatch({ isFinished, win, time, setTime }) {
  useEffect(() => {
    if (win !== true) {
      const timer = setInterval(() => {
        setTime((timee) => {
          if (timee === 0 && !win) {
            clearInterval(timer);
            isFinished(true);
          }
          return timee - 1;
        });
      }, 1000);
    }
  }, []);

  return (
    <div className="stopwatch-container">
      <p className="clock">
        {!win ? `${Math.floor(time / 60)}`.padStart(2, 0) : "00"}:
        {!win ? `${time % 60}`.padStart(1, 0) : "00"}
      </p>
    </div>
  );
}

export default StopWatch;
StopWatch.defaultProps = {
  win: false,
};
StopWatch.propTypes = {
  isFinished: PropTypes.func.isRequired,
  win: PropTypes.bool,
  time: PropTypes.number.isRequired,
  setTime: PropTypes.func.isRequired,
};
