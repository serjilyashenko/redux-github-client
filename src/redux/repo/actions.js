import { CALL_API } from 'redux/middleware/githubApi';
import { REPO_REQUEST, REPO_SUCCESS, REPO_FAILURE } from './actionTypes';

export const fetchRepo = fullName => ({
  type: CALL_API,
  actionTypes: [REPO_REQUEST, REPO_SUCCESS, REPO_FAILURE],
  endpoint: `repos/${fullName}`
});

export default { fetchRepo };
