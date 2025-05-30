import "./Score.scss";
import PropTypes from "prop-types";

function Score({ score }) {
  // const [score, setScore] = useState(0);
  return (
    <div className="scoreTitle">
      <h3> Score : {score} </h3>
    </div>
  );
}

export default Score;
Score.propTypes = {
  score: PropTypes.number.isRequired,
};
