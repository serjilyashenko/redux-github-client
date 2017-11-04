export default (reducer, entityType) => (state, action) => {
  const isInitializationCall = state === undefined;
  if(entityType !== action.entityType && !isInitializationCall) {
    return state;
  }

  return reducer(state, action);
};
