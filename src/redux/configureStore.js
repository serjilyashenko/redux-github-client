import { createStore, applyMiddleware } from 'redux';
import tunk from 'redux-thunk';
import githubApi from 'redux/middleware/githubApi';
import mainReducer from './state/reducer';

const configureStore = initialState => createStore(mainReducer, initialState, applyMiddleware(tunk, githubApi));

export default configureStore;
