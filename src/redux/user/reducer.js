import {RECEIVE_USER, REQUEST_USER} from './actionTypes';

const initState = {
  isFetching: false,
  data: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case REQUEST_USER:
      return {...state, isFetching: true};
    case RECEIVE_USER:
      return {...state, isFetching: false, data: action.data};

    default:
      return state;
  }
};
