import fetch from 'isomorphic-fetch';
import { RECEIVE_USER, REQUEST_USER } from './actionTypes';

const API_ROOT = 'https://api.github.com';

const apiFetch = url => {
  const endPoint = `${API_ROOT}/users/${url}`;

  return fetch(endPoint, {
    Accept: '*/*'
  }).then(response => response.json());
};

export const requestUser = login => ({
  type: REQUEST_USER,
  login
});

export const receiveUser = (login, data) => ({
  type: RECEIVE_USER,
  login,
  data
});

export const fetchUser = login => dispatch => {
  dispatch(requestUser(login));

  return apiFetch(login).then(data => dispatch(receiveUser(login, data)));
};

export default { fetchUser, requestUser };
