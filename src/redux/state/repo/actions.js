import { CALL_API } from 'redux/middleware/githubApi';
import { REPO } from 'redux/constants/entityTypes';
import { ENTITY_REQUEST, ENTITY_SUCCESS, ENTITY_FAILURE } from 'redux/constants/entityActionTypes';

export const fetchRepo = fullName => ({
  type: CALL_API,
  entityType: REPO,
  actionTypes: [ENTITY_REQUEST, ENTITY_SUCCESS, ENTITY_FAILURE],
  endpoint: `repos/${fullName}`,
});

export default { fetchRepo };
