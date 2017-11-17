// @flow
import { combineReducers } from 'redux';
import createTypedReducer from '../helpers/createTypedReducer';
import entityReducer from '../helpers/entityReducer';
import {
  FOLLOWERS,
  FOLLOWINGS,
  REPO,
  REPO_SUBSCRIBERS,
  STARGAZERS,
  USER,
  USER_REPOS,
} from '../constants/entityTypes';
import type { State } from '../../types';

export default combineReducers({
  user: createTypedReducer(entityReducer, USER),
  repo: createTypedReducer(entityReducer, REPO),
  followers: createTypedReducer(entityReducer, FOLLOWERS),
  stargazers: createTypedReducer(entityReducer, STARGAZERS),
  userRepos: createTypedReducer(entityReducer, USER_REPOS),
  repoSubscribers: createTypedReducer(entityReducer, REPO_SUBSCRIBERS),
  followings: createTypedReducer(entityReducer, FOLLOWINGS),
});

export const getUserState = (state: State) => (state ? state.user : null);

export const getRepoState = (state: State) => (state ? state.repo : null);

export const getFollowersState = (state: State) => (state ? state.followers : null);

export const getStargazersState = (state: State) => (state ? state.stargazers : null);

export const getUserReposState = (state: State) => (state ? state.userRepos : null);

export const getRepoSubscribersState = (state: State) => (state ? state.repoSubscribers : null);

export const getFollowingsState = (state: State) => (state ? state.followings : null);
