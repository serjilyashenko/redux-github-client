import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import StargazersContainer from 'containers/StargazersContainer';

const RepoPage = ({ repo }) => (
  <div className="container">
    <div className="offset-2">
      <div className="row">
        <div className="col-12">
          <h2>{repo.name}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div>
            by <b>{repo.owner ? repo.owner.name : ''}</b>
          </div>
          <div>
            created: <b>{moment(repo.createdAt).format('DD:MM:YYYY [at] HH:mm')}</b>
          </div>
          <div>
            updated: <b>{moment(repo.updatedAt).format('DD:MM:YYYY [at] HH:mm')}</b>
          </div>
          <div>
            pushed: <b>{moment(repo.pushedAt).format('DD:MM:YYYY [at] HH:mm')}</b>
          </div>
        </div>
        <div className="col-6">
          <div>
            stargazers:{' '}
            <StargazersContainer login={repo.fullName || ''}>
              <b>{repo.stargazersCount}</b>
            </StargazersContainer>
          </div>
          <div>
            watchers: <b>{repo.watchersCount}</b>
          </div>
          <div>
            open issues: <b>{repo.openIssuesCount}</b>
          </div>
          <div>
            forks: <b>{repo.forksCount}</b>
          </div>
          <div>
            subscribers: <b>{repo.subscribersCount}</b>
          </div>
        </div>
      </div>
    </div>
  </div>
);

RepoPage.propTypes = {
  repo: PropTypes.shape({
    fullName: PropTypes.string,
    name: PropTypes.string,
    owner: PropTypes.shape({
      login: PropTypes.string
    }),
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    pushedAt: PropTypes.string,
    stargazersCount: PropTypes.number,
    watchersCount: PropTypes.number,
    openIssuesCount: PropTypes.number,
    forksCount: PropTypes.number,
    subscribersCount: PropTypes.number
  }).isRequired
};

export default RepoPage;
