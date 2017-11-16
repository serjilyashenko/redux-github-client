import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RepoShortInfo = ({ repo }) => (
  <div className="repo-item">
    <Link to={`/${repo.fullName}`} href={`/${repo.fullName}`}>
      {repo.name}
    </Link>
    <div>
      stars: {repo.stargazersCount}; forks: {repo.forks}
    </div>
  </div>
);

RepoShortInfo.defaultProps = {
  repo: {},
};

RepoShortInfo.propTypes = {
  repo: PropTypes.shape({}),
};

export default RepoShortInfo;
