// @flow
import React, { type Node } from 'react';
import { connect } from 'react-redux';
import PopoverWithPageWrapper from '../components/PopoverWithPageWrapper';
import UserShortInfo from '../components/UserShortInfo';
import { getFollowersState } from '../redux/state/reducer';
import { fetch } from '../redux/state/followers/actions';
import type { State } from '../types';
import type { User } from '../types/user';

type OwnProps = {
  login: string,
};

const mapStateToProps = (state: State, { login }: OwnProps) => {
  const payload = getFollowersState(state) || {};
  const followers = payload.data || [];
  const content = followers.map((user: User): Node => <UserShortInfo key={user.id} user={user} />);

  return {
    content,
    payload,
    id: login,
    left: true,
  };
};

const mapDispatchToProps = (dispatch, { login }: OwnProps) => ({
  fetchData: () => dispatch(fetch(login)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PopoverWithPageWrapper);
