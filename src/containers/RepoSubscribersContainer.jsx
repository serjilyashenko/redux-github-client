import React from 'react';
import { connect } from 'react-redux';
import PopoverWithPageWrapper from 'components/PopoverWithPageWrapper';
import UserShortInfo from 'components/UserShortInfo';
import { getRepoSubscribersState } from 'redux/state/reducer';
import { fetch } from 'redux/state/repoSubscribers/actions';

const mapStateToProps = (state, { fullName }) => {
  const payload = getRepoSubscribersState(state);
  const subscribers = payload.data || [];
  const content = subscribers.map(user => <UserShortInfo key={user.id} user={user} />);

  return {
    content,
    payload,
    id: fullName,
    left: true
  };
};

const mapDispatchToProps = (dispatch, { fullName }) => ({
  fetchData: () => dispatch(fetch(fullName))
});

export default connect(mapStateToProps, mapDispatchToProps)(PopoverWithPageWrapper);
