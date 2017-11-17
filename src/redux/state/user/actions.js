// @flow
import { CALL_API } from '../../../redux/middleware/githubApi';
import { USER } from '../../../redux/constants/entityTypes';
import {
  ENTITY_REQUEST,
  ENTITY_SUCCESS,
  ENTITY_FAILURE,
} from '../../../redux/constants/entityActionTypes';
import type { Action } from '../../../types';

export const fetchUser = (login: string): Action => ({
  type: CALL_API,
  entityType: USER,
  endpoint: `users/${login}`,
  actionTypes: [ENTITY_REQUEST, ENTITY_SUCCESS, ENTITY_FAILURE],
});

export default { fetchUser };
