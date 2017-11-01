import React from 'react';
import spinnerImage from './spinner.gif';

const Spinner = () => (
  <div className="spinner__wrapper">
    <img className="spinner" src={spinnerImage} alt="loading..." />;
  </div>
);

export default Spinner;
