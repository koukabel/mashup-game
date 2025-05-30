import PropTypes from "prop-types";
import "./Error.scss";

function Error({ type }) {
  return <p className="error">{type}</p>;
}
export default Error;
Error.propTypes = {
  type: PropTypes.string.isRequired,
};
