import React from 'react';
import { Provider } from 'react-redux';
import App from 'components/App';
import configureStore from 'redux/configureStore';

const store = configureStore();

export default (
  <Provider store={store}>
    <App />
  </Provider>
);
