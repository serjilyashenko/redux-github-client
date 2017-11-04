import { CALL_API } from 'redux/middleware/githubApi';
import { FOLLOWERS } from 'redux/constants/entityTypes';
import { ENTITY_REQUEST, ENTITY_SUCCESS, ENTITY_FAILURE } from 'redux/constants/entityActionTypes';

export const fetch = login => ({
  type: CALL_API,
  entityType: FOLLOWERS,
  actionTypes: [ENTITY_REQUEST, ENTITY_SUCCESS, ENTITY_FAILURE],
  endpoint: `users/${login}/followers`
});

export default { fetch };
