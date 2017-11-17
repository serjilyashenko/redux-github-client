// @flow
import { CALL_API } from '../../../redux/middleware/githubApi';
import { STARGAZERS } from '../../../redux/constants/entityTypes';
import {
  ENTITY_REQUEST,
  ENTITY_SUCCESS,
  ENTITY_FAILURE,
} from '../../../redux/constants/entityActionTypes';
import type { Action } from '../../../types';

export const fetch = (fullName: string): Action => ({
  type: CALL_API,
  entityType: STARGAZERS,
  actionTypes: [ENTITY_REQUEST, ENTITY_SUCCESS, ENTITY_FAILURE],
  endpoint: `repos/${fullName}/stargazers`,
});

export default { fetch };
