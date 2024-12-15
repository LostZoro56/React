import styles from "./Button.module.css";
import PropTypes from "prop-types";

function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles.primary}`}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired, // Ensures children are a valid React node and required
  onClick: PropTypes.func, // Validates onClick as a function
  type: PropTypes.oneOf(["primary", "back", "position"]), // Restricts type to specific values
};

export default Button;
