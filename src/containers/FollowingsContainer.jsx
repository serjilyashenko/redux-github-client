import React from 'react';
import { connect } from 'react-redux';
import PopoverWithPageWrapper from 'components/PopoverWithPageWrapper';
import UserShortInfo from 'components/UserShortInfo';
import { getFollowingsState } from 'redux/state/reducer';
import { fetch } from 'redux/state/followings/actions';

const mapStateToProps = (state, { login }) => {
  const payload = getFollowingsState(state);
  const followings = payload.data || [];
  const content = followings.map(user => <UserShortInfo key={user.id} user={user} />);

  return {
    content,
    payload,
    id: login,
    left: true
  };
};

const mapDispatchToProps = (dispatch, { login }) => ({
  fetchData: () => dispatch(fetch(login))
});

export default connect(mapStateToProps, mapDispatchToProps)(PopoverWithPageWrapper);
