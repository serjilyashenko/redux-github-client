import { CALL_API } from 'redux/middleware/githubApi';
import { USER_REQUEST, USER_SUCCESS, USER_FAILURE } from './actionTypes';

export const fetchUser = login => ({
  type: CALL_API,
  actionTypes: [USER_REQUEST, USER_SUCCESS, USER_FAILURE],
  endpoint: `users/${login}`
});

export default { fetchUser };
