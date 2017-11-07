import React from 'react';
import PropTypes from 'prop-types';
import FollowersContainer from 'containers/FollowersContainer';
import UserReposContainer from 'containers/UserReposContainer';

const UserPage = props => (
  <div className="container">
    <div className="row ">
      <div className="col-3">
        <img className="avatar" src={props.user.avatarUrl} alt="avatar" />
      </div>
      <div className="col-9">
        <div className="row">
          <h2>{props.user.name}</h2>
        </div>
        <div className="row">
          <div className="col-6">
            <div>
              <UserReposContainer login={props.user.login}>
                Public repositories: <b>{props.user.publicRepos}</b>
              </UserReposContainer>
            </div>
            <div>
              Public gists: <b>{props.user.publicGists}</b>
            </div>
          </div>
          <div className="col-6">
            <div>
              <FollowersContainer login={props.user.login || ''}>
                Followers: <b>{props.user.followers}</b>
              </FollowersContainer>
            </div>
            <div>
              Following: <b>{props.user.following}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

UserPage.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string,
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
    publicRepos: PropTypes.number,
    publicGists: PropTypes.number,
    followers: PropTypes.number,
    following: PropTypes.number
  }).isRequired
};

export default UserPage;
