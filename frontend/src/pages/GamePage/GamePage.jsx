import "./GamePage.scss";
import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import GameLogic from "../../components/GameLogic/GameLogic";
import Error from "../../components/Error/Error";

function GamePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [gameState, setGameState] = useState({
    loading: true,
    error: null,
    apiData: [],
    apiName: "",
    apiList: [],
  });

  // Validate and cache location state
  useEffect(() => {
    const validateState = () => {
      if (!location.state) {
        throw new Error("Missing game data. Please select a theme first.");
      }

      const { apiData, apiName, apiList } = location.state;

      if (!apiData || !apiName || !apiList) {
        throw new Error("Invalid game data structure.");
      }

      if (!Array.isArray(apiData) || apiData.length === 0) {
        throw new Error("No characters available for this theme.");
      }

      return { apiData, apiName, apiList };
    };

    try {
      const validState = validateState();
      setGameState({
        loading: false,
        error: null,
        ...validState,
      });
    } catch (err) {
      setGameState({
        loading: false,
        error: err.message,
        apiData: [],
        apiName: "",
        apiList: [],
      });
    }
  }, [location.state]);

  if (gameState.loading) {
    return <div className="loader">Loading game...</div>;
  }

  if (gameState.error) {
    return (
      <div className="game-error">
        <Error type={gameState.error} />
        <button
          className="back-button"
          onClick={() => navigate("/", { replace: true })}
          type="button"
        >
          ← Back to Theme Selection
        </button>
      </div>
    );
  }

  return (
    <div className="game" onDragStart={(e) => e.preventDefault()}>
      <GameLogic
        apiName={gameState.apiName}
        apiData={gameState.apiData}
        apiList={gameState.apiList}
      />
    </div>
  );
}

export default GamePage;
