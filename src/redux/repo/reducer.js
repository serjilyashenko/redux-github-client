import { REPO_REQUEST, REPO_SUCCESS, REPO_FAILURE } from './actionTypes';

const initState = {
  loading: false,
  data: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case REPO_REQUEST:
      return { ...state, loading: true };
    case REPO_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case REPO_FAILURE:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export const getRepo = state => state.data;
export const isLoading = state => state.loading;
