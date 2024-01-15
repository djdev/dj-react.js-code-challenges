import PropTypes from "prop-types";

export default function Color({ hex, name }) {
  return (
    <div className="color-square" style={{ backgroundColor: hex }}>
      <h2>{name}</h2>
    </div>
  );
}

Color.propTypes = {
  hex: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
