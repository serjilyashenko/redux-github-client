import React from 'react';
import { connect } from 'react-redux';
import PopoverWithPageWrapper from 'components/PopoverWithPageWrapper';
import UserShortInfo from 'components/UserShortInfo';
import { getStargazersState } from 'redux/state/reducer';
import { fetch } from 'redux/state/stargazers/actions';

const mapStateToProps = (state, { fullName }) => {
  const payload = getStargazersState(state);
  const stargazers = payload.data || [];
  const content = stargazers.map(user => <UserShortInfo key={user.id} user={user} />);

  return {
    content,
    payload,
    id: fullName,
    left: true,
  };
};

const mapDispatchToProps = (dispatch, { fullName }) => ({
  fetchData: () => dispatch(fetch(fullName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PopoverWithPageWrapper);
