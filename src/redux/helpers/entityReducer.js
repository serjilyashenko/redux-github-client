import { ENTITY_REQUEST, ENTITY_SUCCESS, ENTITY_FAILURE } from '../constants/entityActionTypes';

const initState = {
  loading: false,
  data: null,
  error: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case ENTITY_REQUEST:
      return { ...state, loading: true, data: null, error: null };
    case ENTITY_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
    case ENTITY_FAILURE:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};
