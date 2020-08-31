import React from 'react';

// Submit button counts inputs, chaning on each input.
const SubmitButton = ({ name, gender, dateOfBirth, label }) => (
  <button
    type="submit"
  >
    {/* Is this needed if the label doesn't change? */}
    {label}
  </button>
)

export default SubmitButton;
