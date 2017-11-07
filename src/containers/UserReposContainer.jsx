import React from 'react';
import { connect } from 'react-redux';
import PopoverWithPageWrapper from 'components/PopoverWithPageWrapper';
import RepoShortInfo from 'components/RepoShortInfo';
import { getUserReposState } from 'redux/state/reducer';
import { fetch } from 'redux/state/userRepos/actions';

const mapStateToProps = (state, { login }) => {
  const payload = getUserReposState(state);
  const userRepos = payload.data || [];
  const content = userRepos.map(repo => <RepoShortInfo key={repo.id} repo={repo} />);

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
