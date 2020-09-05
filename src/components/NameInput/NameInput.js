import React from 'react';
import './NameInput.css';

const NameInput = ({placeholder, name, filled}) => {
  const inputFilled = filled ? 'filled-field' : null;
  // const inputFilled = filled && 'filled-field';
  return (
  <input
    // id={inputFilled}
    className={['NameInput', inputFilled].join(' ')}
    placeholder={placeholder}
 />
);
  };

export default NameInput;
