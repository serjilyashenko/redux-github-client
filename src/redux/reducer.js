import { combineReducers } from 'redux';
import user from './user/reducer';

export default combineReducers({user});

export const getUser = state => state.user;
