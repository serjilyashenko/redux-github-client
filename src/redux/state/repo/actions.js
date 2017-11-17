// @flow
import { CALL_API } from '../../../redux/middleware/githubApi';
import { REPO } from '../../../redux/constants/entityTypes';
import {
  ENTITY_REQUEST,
  ENTITY_SUCCESS,
  ENTITY_FAILURE,
} from '../../../redux/constants/entityActionTypes';
import type { Action } from '../../../types';

export const fetchRepo = (fullName: string): Action => ({
  type: CALL_API,
  entityType: REPO,
  actionTypes: [ENTITY_REQUEST, ENTITY_SUCCESS, ENTITY_FAILURE],
  endpoint: `repos/${fullName}`,
});

export default { fetchRepo };
