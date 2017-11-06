/* eslint prefer-promise-reject-errors: 0 */
import fetch from 'isomorphic-fetch';

export const CALL_API = 'CALL_API';

const API_ROOT = 'https://api.github.com';

const apiRequest = (method, endpoing) => {
  const url = `${API_ROOT}/${endpoing}`;

  return fetch(url, {
    headers: {
      Authorization: 'token b497d919fef07f2846cd5cb940135011c6aeb77d',
      Accept: '*/*'
    }
  }).then(response => {
    if (!response.ok) {
      const { status } = response;
      return response.json().then(({ message }) => Promise.reject({ status, message }));
    }

    return response.json();
  });
};

const verifyApiAction = action => {
  const { endpoint, actionTypes } = action;

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.');
  }
  if (!Array.isArray(actionTypes) || actionTypes.length !== 3) {
    throw new Error('Expected an array of three actionTypes.');
  }
  if (!actionTypes.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.');
  }
};

export default () => next => action => {
  if (action.type !== CALL_API) {
    return next(action);
  }

  verifyApiAction(action);

  const [requestType, successType, failureType] = action.actionTypes;
  const { method = 'GET', endpoint } = action;
  next({ ...action, type: requestType });

  return apiRequest(method, endpoint)
    .then(payload => next({ ...action, type: successType, payload }))
    .catch(error => next({ ...action, type: failureType, error }));
};
