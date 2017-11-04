import { combineReducers } from 'redux';
import createTypedReducer from 'redux/helpers/createTypedReducer';
import entityReducer from 'redux/helpers/entityReducer';
import { FOLLOWERS, REPO, USER } from '../constants/entityTypes';

export default combineReducers({
  user: createTypedReducer(entityReducer, USER),
  repo: createTypedReducer(entityReducer, REPO),
  followers: createTypedReducer(entityReducer, FOLLOWERS)
});

export const getUserState = state => state.user;

export const getRepoState = state => state.repo;

export const getFollowersState = state => state.followers;
