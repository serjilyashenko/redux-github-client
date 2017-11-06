import { CALL_API } from 'redux/middleware/githubApi';
import { STARGAZERS } from 'redux/constants/entityTypes';
import { ENTITY_REQUEST, ENTITY_SUCCESS, ENTITY_FAILURE } from 'redux/constants/entityActionTypes';

export const fetch = fullName => ({
  type: CALL_API,
  entityType: STARGAZERS,
  actionTypes: [ENTITY_REQUEST, ENTITY_SUCCESS, ENTITY_FAILURE],
  endpoint: `repos/${fullName}/stargazers`
});

export default { fetch };
