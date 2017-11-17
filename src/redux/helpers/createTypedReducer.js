// @flow
import type { EntityReducer, Action } from '../../types';
import type { EntityState } from '../../types/state';

export default (reducer: EntityReducer, entityType: string) => (
  state: EntityState,
  action: Action,
): EntityState => {
  const isInitializationCall = state === undefined;
  if (entityType !== action.entityType && !isInitializationCall) {
    return state;
  }

  return reducer(state, action);
};
