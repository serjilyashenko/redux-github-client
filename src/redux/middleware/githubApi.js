import fetch from 'isomorphic-fetch';

export const CALL_API = 'CALL_API';

const API_ROOT = 'https://api.github.com';

const apiRequest = (method, endpoing) => {
  const url = `${API_ROOT}/${endpoing}`;

  return fetch(url, {
    Accept: '*/*'
  }).then(response => response.json());
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
  next({ type: requestType });

  return apiRequest(method, endpoint)
    .then(payload => next({ type: successType, payload }))
    .catch(error => next({ type: failureType, error }));
};
