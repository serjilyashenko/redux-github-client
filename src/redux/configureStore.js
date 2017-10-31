import { createStore, applyMiddleware } from 'redux';
import tunk from 'redux-thunk';
import mainReducer from './reducer';

const configureStore = initialState => createStore(mainReducer, initialState, applyMiddleware(tunk));

export default configureStore;
