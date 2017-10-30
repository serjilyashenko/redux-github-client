import React from 'react';
import PropTypes from 'prop-types';

const App = props => <h1 className="app__element">{props.text}</h1>;

App.propTypes = {
  text: PropTypes.string.isRequired
};

export default App;
