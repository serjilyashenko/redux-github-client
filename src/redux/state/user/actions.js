import { CALL_API } from 'redux/middleware/githubApi';
import { USER } from 'redux/constants/entityTypes';
import { ENTITY_REQUEST, ENTITY_SUCCESS, ENTITY_FAILURE } from 'redux/constants/entityActionTypes';

export const fetchUser = login => ({
  type: CALL_API,
  entityType: USER,
  endpoint: `users/${login}`,
  actionTypes: [ENTITY_REQUEST, ENTITY_SUCCESS, ENTITY_FAILURE]
});

export default { fetchUser };
