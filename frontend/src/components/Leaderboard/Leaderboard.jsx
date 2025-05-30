import "./Leaderboard.scss";

function Leaderboard() {
  const board = [
    {
      id: 1,
      name: "LeBGdu59",
      score: 50550,
    },
    {
      id: 2,
      name: "Faustine",
      score: 43390,
    },
    {
      id: 3,
      name: "Jochelin",
      score: 42900,
    },
    {
      id: 4,
      name: "Vivapasta",
      score: 32345,
    },
    {
      id: 5,
      name: "Rudymentaire",
      score: 25098,
    },
    {
      id: 6,
      name: "Cooloud",
      score: 23403,
    },
    {
      id: 7,
      name: "Michaël jaqueson",
      score: 22980,
    },
    {
      id: 8,
      name: "MohammeDixDoigts",
      score: 21900,
    },
    {
      id: 9,
      name: "Rudydoigtdepieds",
      score: 20847,
    },
    {
      id: 10,
      name: "Pokemon huGo",
      score: 19833,
    },
    {
      id: 11,
      name: "Mohammedical",
      score: 19405,
    },
    {
      id: 12,
      name: "Romainichel",
      score: 18394,
    },
    {
      id: 13,
      name: "Tesla",
      score: 17594,
    },
    {
      id: 14,
      name: "Marzoukladanse",
      score: 12453,
    },
    {
      id: 15,
      name: "AnthonyVAFC",
      score: 11900,
    },
    {
      id: 16,
      name: "Alexterieur",
      score: 10944,
    },
    {
      id: 17,
      name: "Elizabete",
      score: 9493,
    },
    {
      id: 18,
      name: "Fabien",
      score: 8390,
    },
  ];
  return (
    <div className="container">
      <div className="topLeadersList">
        {board.map((leader, index) => (
          <div className="leader" key={leader.id}>
            {index + 1 <= 3 && <div className="containerImage" />}
          </div>
        ))}
      </div>

      <div className="playerslist">
        <div className="table">
          <div>★</div>

          <div>Player</div>

          <div>Score</div>
        </div>
        <div className="list">
          <div className="scroll-bar-wrap">
            <div className="scroll-box">
              {board.map((leader, index) => (
                <div className="player" key={leader.id}>
                  <span> {index + 1}</span>
                  <div className="user">
                    <span> {leader.name} </span>
                  </div>
                  <span> {leader.score} </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
