// @flow
import { CALL_API } from '../../../redux/middleware/githubApi';
import { REPO_SUBSCRIBERS } from '../../../redux/constants/entityTypes';
import {
  ENTITY_REQUEST,
  ENTITY_SUCCESS,
  ENTITY_FAILURE,
} from '../../../redux/constants/entityActionTypes';
import type { Action } from '../../../types';

export const fetch = (fullName: string): Action => ({
  type: CALL_API,
  id: fullName,
  entityType: REPO_SUBSCRIBERS,
  actionTypes: [ENTITY_REQUEST, ENTITY_SUCCESS, ENTITY_FAILURE],
  endpoint: `repos/${fullName}/subscribers`,
});

export default { fetch };
