import PropTypes from "prop-types";

function Restart({ show }) {
  const restart = () => {
    window.location.reload();
  };

  return (
    <button
      className={`${show ? "restart-popup" : "restart"}`}
      type="submit"
      id="restart"
      onClick={restart}
    >
      Restart
    </button>
  );
}
export default Restart;
Restart.defaultProps = {
  show: true,
};
Restart.propTypes = {
  show: PropTypes.bool,
};
