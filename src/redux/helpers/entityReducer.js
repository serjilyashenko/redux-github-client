// @flow
import { ENTITY_REQUEST, ENTITY_SUCCESS, ENTITY_FAILURE } from '../constants/entityActionTypes';
import type { Action } from '../../types';
import type { EntityState } from '../../types/state';

const initState = {
  loading: false,
  data: null,
  error: null,
};

export default (state: EntityState = initState, action: Action): EntityState => {
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
