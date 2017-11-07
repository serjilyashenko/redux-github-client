import { ENTITY_REQUEST, ENTITY_SUCCESS, ENTITY_FAILURE } from '../constants/entityActionTypes';

const initState = {
  loading: false,
  data: null,
  error: null,
  id: ''
};

export default (state = initState, action) => {
  switch (action.type) {
    case ENTITY_REQUEST:
      return { ...state, loading: true, data: null, error: null };
    case ENTITY_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null, id: action.id };
    case ENTITY_FAILURE:
      return { ...state, loading: false, error: action.error, id: action.id };

    default:
      return state;
  }
};
