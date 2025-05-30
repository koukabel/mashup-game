import { useNavigate } from "react-router";
import "./StartButton.scss";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Error from "../Error/Error";

function StartButton({ apiData, apiName, apiList }) {
  const [error, setError] = useState(false);

  // The start button only appears when another button is clicked.
  // Animation should be smooth

  // when start btn is clicked, navigate to the game page
  const navigate = useNavigate();
  const routeChange = () => {
    if (apiData.length !== 0) {
      navigate(`/game`, { state: { apiData, apiName, apiList } });
    } else {
      setError(true);
    }
  };

  return (
    <div className="start-container">
      {/* Once the user enters his name and chosses a theme and clicks the Start btn, 
    he can go the game route */}

      {/* onClick, timer starts */}
      <button
        type="submit"
        className="start-button"
        id="start"
        onClick={() => {
          routeChange();
        }}
      >
        Start
      </button>
      {error === true && <Error type="you must choose a theme first !" />}
    </div>
  );
}
StartButton.defaultProps = {
  apiName: null,
};
StartButton.propTypes = {
  apiName: PropTypes.string,
  apiData: PropTypes.instanceOf(Array).isRequired,
  apiList: PropTypes.instanceOf(Array).isRequired,
};
export default StartButton;
