import React from 'react';
import './SubmitButton.css';
// import styles from './SubmitButton.module.css';

// Submit button counts inputs, chaning on each input.
const SubmitButton = ({ name, gender, dateOfBirth, backgroundColor, label, completion }) => {
  return (
    <button
      type="submit"
      style={backgroundColor && { backgroundColor }}
      // Without CSS modules
      className={['SubmitButton', `${completion}`].join(' ')}
      // With CSS modules
      // className={`${styles.SubmitButton} ${styles[completion]}`}
    >
      {/* Is this needed if the label doesn't change? */}
      {label}
    </button>
  );
};

export default SubmitButton;

