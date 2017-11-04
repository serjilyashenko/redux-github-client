import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RepoPage from 'components/RepoPage';
import { fetchRepo } from 'redux/state/repo/actions';
import { getRepoState } from 'redux/state/reducer';
import PageWrapper from 'components/PageWrapper';

const RepoPageContainer = ({ payload: { data, loading, error }, id, dispatch }) => (
  <PageWrapper id={id} loading={loading} error={error} fetchData={() => dispatch(fetchRepo(id))}>
    <RepoPage repo={data || {}} />
  </PageWrapper>
);

RepoPageContainer.propTypes = {
  payload: PropTypes.shape({
    data: PropTypes.shape({}),
    loading: PropTypes.bool,
    error: PropTypes.shape()
  }).isRequired,
  id: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state, { match: { params } }) => ({
  id: `${params.login}/${params.repo}`,
  payload: getRepoState(state)
});

export default connect(mapStateToProps)(RepoPageContainer);
