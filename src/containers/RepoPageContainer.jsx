import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RepoPage from 'components/RepoPage';
import { fetchRepo } from 'redux/repo/actions';
import { getRepoState } from 'redux/reducer';
import PageWrapper from 'components/PageWrapper';

class RepoPageContainer extends Component {
  static defaultProps = {
    repo: null,
    error: null
  };

  static propTypes = {
    repo: PropTypes.shape({}),
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.bool,
    fullName: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  componentWillMount() {
    const { fullName, dispatch } = this.props;
    dispatch(fetchRepo(fullName));
  }

  componentWillReceiveProps(nextProps) {
    const { fullName, dispatch } = nextProps;
    if (fullName !== this.props.fullName) {
      dispatch(fetchRepo(fullName));
    }
  }

  render() {
    const { isLoading, error, repo } = this.props;
    const pageContent = repo ? <RepoPage repo={repo} /> : null;

    return (
      <PageWrapper isLoading={isLoading} error={error}>
        {pageContent}
      </PageWrapper>
    );
  }
}

// class RepoPageContainer extends ClassName {
//
// }

const mapStateToProps = (state, { match: { params } }) => ({
  fullName: `${params.login}/${params.repo}`,
  repo: getRepoState(state).data,
  isLoading: getRepoState(state).loading,
  error: getRepoState(state).error
});

// const mapDispatchToProps = (dispatch, { match: { params } }) => ({
//   fetchData: () => dispatch(fetchRepo(`${params.login}/${params.repo}`))
// });

export default connect(mapStateToProps)(RepoPageContainer);
