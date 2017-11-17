// @flow
import { CALL_API } from '../../../redux/middleware/githubApi';
import { USER_REPOS } from '../../../redux/constants/entityTypes';
import {
  ENTITY_REQUEST,
  ENTITY_SUCCESS,
  ENTITY_FAILURE,
} from '../../../redux/constants/entityActionTypes';
import type { Action } from '../../../types';

export const fetch = (login: string): Action => ({
  type: CALL_API,
  id: login,
  entityType: USER_REPOS,
  actionTypes: [ENTITY_REQUEST, ENTITY_SUCCESS, ENTITY_FAILURE],
  endpoint: `users/${login}/repos`,
});

export default { fetch };
