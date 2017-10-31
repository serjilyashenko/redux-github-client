import React from 'react';
import PropTypes from 'prop-types';
import RepoPage from 'components/RepoPage';

const RepoPageContainer = props => <RepoPage repo={props.match.params} />;

RepoPageContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      user: PropTypes.string,
      repo: PropTypes.string
    })
  }).isRequired
};

export default RepoPageContainer;
