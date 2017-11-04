import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

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
            created: <b>{moment(repo.created_at).format('DD:MM:YYYY [at] HH:mm')}</b>
          </div>
          <div>
            updated: <b>{moment(repo.updated_at).format('DD:MM:YYYY [at] HH:mm')}</b>
          </div>
          <div>
            pushed: <b>{moment(repo.pushed_at).format('DD:MM:YYYY [at] HH:mm')}</b>
          </div>
        </div>
        <div className="col-6">
          <div>
            stargazers: <b>{repo.stargazers_count}</b>
          </div>
          <div>
            watchers: <b>{repo.watchers_count}</b>
          </div>
          <div>
            open issues: <b>{repo.open_issues_count}</b>
          </div>
          <div>
            forks: <b>{repo.forks_count}</b>
          </div>
          <div>
            subscribers: <b>{repo.subscribers_count}</b>
          </div>
        </div>
      </div>
    </div>
  </div>
);

RepoPage.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string,
    owner: PropTypes.shape({
      login: PropTypes.string
    }),
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    pushed_at: PropTypes.string,
    stargazers_count: PropTypes.number,
    watchers_count: PropTypes.number,
    open_issues_count: PropTypes.number,
    forks_count: PropTypes.number,
    subscribers_count: PropTypes.number
  }).isRequired
};

export default RepoPage;
