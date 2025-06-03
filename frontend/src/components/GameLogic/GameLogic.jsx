import "./GameLogic.scss";
import React, { useState, useEffect, useMemo } from "react";
import { shuffle, get } from "lodash";
import PropTypes from "prop-types";
import Restart from "../Restart/Restart";
import StopWatch from "../StopWatch/StopWatch";
import Score from "../Score/Score";
import Countdown from "../Countdown/Countdown";
import GamePopUp from "../GameOver/GamePopUp";

function GameLogic({ apiName = "", apiData = [], apiList = [] }) {
  const cards = useMemo(() => {
    if (!Array.isArray(apiData) || apiData.length === 0) return [];

    // Ensure we have enough cards (need at least 7 unique cards for 14 total)
    const requiredCards = Math.min(7, apiData.length);
    const maxIndex = apiData.length - requiredCards;
    const startIndex = Math.floor(Math.random() * (maxIndex + 1));
    const selectedCards = apiData.slice(startIndex, startIndex + requiredCards);

    return shuffle([...selectedCards, ...selectedCards]);
  }, [apiData]);

  const [clickedImg, setClickedImg] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [win, setWin] = useState(false);
  const [endGame, setEndGame] = useState(false);
  const [time, setTime] = useState(120);
  const [showComponent, setShowComponent] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

  const currentApi = apiList.find((api) => api.name === apiName) || {};

  if (!apiData || apiData.length === 0) {
    return (
      <div className="error">
        No game data available. Please try another theme.
      </div>
    );
  }

  const isFinished = (value) => {
    setFinished(value);
  };

  const flipCard = (index) => {
    if (!matchedCards.includes(index)) {
      if (clickedImg.length === 0) {
        setClickedImg([index]);
      } else if (clickedImg.length === 1) {
        const firstChoice = clickedImg[0];
        const secondChoice = index;

        if (firstChoice !== secondChoice) {
          setTurns(turns + 1);
          const apiConfig = apiList.find((api) => api.name === apiName);
          const firstCard = cards[firstChoice];
          const secondCard = cards[secondChoice];
          const key = apiConfig?.key || "id";

          if (firstCard[key] === secondCard[key]) {
            setMatchedCards([...matchedCards, firstChoice, secondChoice]);
            setScore(score + 500);
          } else {
            setScore(Math.max(0, score - 150));
          }
          setClickedImg([...clickedImg, index]);
        }
      } else if (clickedImg.length === 2) {
        setClickedImg([index]);
      }
    }
  };
  const hideaddons = () => {
    setShowComponent(!showComponent);
  };

  useEffect(() => {
    const timeoutId = setTimeout(hideaddons, 5000);
    return () => clearTimeout(timeoutId);
  }, []);
  useEffect(() => {
    if (showComponent && !win && !endGame && finished) {
      setWin(false);
      setEndGame(true);
    }
  }, [finished, showComponent, win, endGame]);

  useEffect(() => {
    if (cards.length > 0 && matchedCards.length === cards.length) {
      setEndGame(true);
      setWin(true);
    }
  }, [matchedCards, cards.length]);
  return (
    <>
      {endGame && (
        <GamePopUp win={win} score={score} turns={turns} finished={finished} />
      )}
      {!showComponent && <Countdown />}
      <div className="imageGrid">
        {cards.map((card, index) => {
          const displayedCard =
            clickedImg.includes(index) || matchedCards.includes(index);
          const imagePath =
            typeof currentApi.path_to_image === "function"
              ? currentApi.path_to_image(card)
              : get(card, currentApi.path_to_image, "");
          return (
            <div
              key={`card_${
                currentApi.key
                  ? card[currentApi.key]
                  : `card_${card.id || JSON.stringify(card)}`
              }`}
              role="button"
              tabIndex={0}
              className={`card-outer ${displayedCard ? "flipped" : ""} ${
                !showComponent ? "flipped" : ""
              }`}
              onClick={() => flipCard(index)}
              onKeyDown={(e) => e.key === "Enter" && flipCard(index)}
            >
              <div className="card">
                <div className="front">
                  <img
                    src={imagePath}
                    alt={get(card, currentApi.item_name, "Memory card")}
                    onError={(e) => {
                      e.target.src = "fallback-image-url";
                      e.target.alt = "Image not available";
                    }}
                    draggable="false"
                  />
                </div>
                <div className="back" />
              </div>
            </div>
          );
        })}
      </div>
      {!endGame && showComponent && (
        <>
          <Restart show={false} />
          <StopWatch
            isFinished={isFinished}
            win={win}
            endGame={endGame}
            time={time}
            setTime={setTime}
          />
          <Score score={score} />
        </>
      )}

      {!endGame && showComponent && (
        <div className="ClickCounterBtn">
          <span className="turns">{turns} Turns</span>
        </div>
      )}
    </>
  );
}

GameLogic.propTypes = {
  apiName: PropTypes.string.isRequired,
  apiData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  apiList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
export default GameLogic;
