import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RepoPage from 'components/RepoPage';
import { fetchRepo } from 'redux/repo/actions';
import { getRepo, isRepoLoading } from 'redux/reducer';

class RepoPageContainer extends Component {
  static propTypes = {
    repo: PropTypes.shape({}).isRequired,
    isLoading: PropTypes.bool.isRequired,
    fullName: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  componentDidMount() {
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
    const { isLoading } = this.props;

    return isLoading ? <div>Loading...</div> : <RepoPage repo={this.props.repo} />;
  }
}

RepoPageContainer.propTypes = {
  repo: PropTypes.shape({}).isRequired
};

const mapStateIntoProps = (state, { match: { params } }) => ({
  repo: getRepo(state) || {},
  fullName: `${params.login}/${params.repo}`,
  isLoading: isRepoLoading(state)
});

export default connect(mapStateIntoProps)(RepoPageContainer);
