import React from 'react';
import { connect } from 'react-redux';
import PopoverWithPageWrapper from 'components/PopoverWithPageWrapper';
import UserShortInfo from 'components/UserShortInfo';
import { getFollowersState } from 'redux/state/reducer';
import { fetch } from 'redux/state/followers/actions';

const mapStateToProps = (state, { login }) => {
  const payload = getFollowersState(state);
  const followers = payload.data || [];
  const content = followers.map(user => <UserShortInfo key={user.id} user={user} />);

  return {
    content,
    payload,
    id: login,
    left: true,
  };
};

const mapDispatchToProps = (dispatch, { login }) => ({
  fetchData: () => dispatch(fetch(login)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PopoverWithPageWrapper);
