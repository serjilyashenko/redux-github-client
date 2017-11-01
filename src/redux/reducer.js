import { combineReducers } from 'redux';
import user, * as fromUser from './user/reducer';
import repo, * as fromRepo from './repo/reducer';

export default combineReducers({ user, repo });

export const getUserState = state => state.user;
export const getUser = state => fromUser.getUser(getUserState(state));
export const isUserLoading = state => fromUser.isLoading(getUserState(state));

export const getRepoState = state => state.repo;
export const getRepo = state => fromRepo.getRepo(getRepoState(state));
export const isRepoLoading = state => fromRepo.isLoading(getRepoState(state));
