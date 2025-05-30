import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import GamePage from "./pages/GamePage/GamePage";
import LeaderboardPage from "./pages/LeaderboardPage/LeaderboardPage";
import RulesPage from "./pages/RulesPage/RulesPage";

function App() {
  // Only show StopWatch after 5 seconds
  return (
    <div className="App" onDragStart={(e) => e.preventDefault()}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<HomePage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="/rules" element={<RulesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
