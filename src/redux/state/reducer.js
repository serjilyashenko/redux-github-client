import { combineReducers } from 'redux';
import createTypedReducer from 'redux/helpers/createTypedReducer';
import entityReducer from 'redux/helpers/entityReducer';
import {FOLLOWERS, FOLLOWINGS, REPO, REPO_SUBSCRIBERS, STARGAZERS, USER, USER_REPOS} from '../constants/entityTypes';

export default combineReducers({
  user: createTypedReducer(entityReducer, USER),
  repo: createTypedReducer(entityReducer, REPO),
  followers: createTypedReducer(entityReducer, FOLLOWERS),
  stargazers: createTypedReducer(entityReducer, STARGAZERS),
  userRepos: createTypedReducer(entityReducer, USER_REPOS),
  repoSubscribers: createTypedReducer(entityReducer, REPO_SUBSCRIBERS),
  followings: createTypedReducer(entityReducer, FOLLOWINGS)
});

export const getUserState = state => state.user;

export const getRepoState = state => state.repo;

export const getFollowersState = state => state.followers;

export const getStargazersState = state => state.stargazers;

export const getUserReposState = state => state.userRepos;

export const getRepoSubscribersState = state => state.repoSubscribers;

export const getFollowingsState = state => state.followings;
