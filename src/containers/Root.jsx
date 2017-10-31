import React from 'react';
import { Provider } from 'react-redux';
import App from 'components/App';
import configureStore from 'redux/configureStore';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
