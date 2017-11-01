import { USER_REQUEST, USER_SUCCESS, USER_FAILURE } from './actionTypes';

const initState = {
  loading: false,
  data: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return { ...state, loading: true };
    case USER_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case USER_FAILURE:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export const getUser = state => state.data;
export const isLoading = state => state.loading;
