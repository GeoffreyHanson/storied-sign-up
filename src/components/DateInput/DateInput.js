import React from 'react';
import './DateInput.css';

const DateInput = ({ placeholder, filled }) => {
  const inputFilled = filled ? 'filled-field' : null;
  return(
    <input
      className={['DateInput', inputFilled].join(' ')}
      placeholder={placeholder}
    />
  );
};

export default DateInput;
