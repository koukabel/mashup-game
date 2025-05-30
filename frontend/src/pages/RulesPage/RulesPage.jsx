import React from "react";
import "./RulesPage.scss";

function RulesPage() {
  return (
    <div className="rules-container">
      <h2 className="rules-title">The Rules</h2>
      <div className="rules_list">
        <p>
          The aim of the game is to select all the duplicate cards till there
          are no more.
          <br />
          Only one round to get the victory but don't think it's easy to win, in
          fact, try to keep up and read the following rules.
        </p>
        <br />
        <br />
        <p>Enter your nickname, choose the theme and launch the game.</p>
        <br />
        <br />
        <p>30 cards, 15 pairs of cards to find in 2 minutes.</p>
        <p>
          Each time you find a pair, you'll earn 500 points.
          <br />
          On the contrary, you'll lose 150 points.
        </p>
        <br />
        <br />
        <p>
          If you realize that you are a big loser, you can restart the game and
          your tiny score.
        </p>
        <br />
        <br />
        <p>
          Don't forget that the best players will be on the leaderboard, try to
          be the best.
        </p>
      </div>
    </div>
  );
}
export default RulesPage;
