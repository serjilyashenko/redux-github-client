import React from 'react';
import PropTypes from 'prop-types';

const UserPage = props => (
  <div className="container">
    <div className="row ">
      <div className="col-3">
        <img className="avatar" src={props.user.avatar_url} alt="avatar" />
      </div>
      <div className="col-9">
        <div className="row">
          <h2>{props.user.name}</h2>
        </div>
        <div className="row">
          <div className="col-6">
            <div>
              Public repositories: <b>{props.user.public_repos}</b>
            </div>
            <div>
              Public gists: <b>{props.user.public_gists}</b>
            </div>
          </div>
          <div className="col-6">
            <div>
              Followers: <b>{props.user.followers}</b>
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
    name: PropTypes.string,
    avatar_url: PropTypes.string,
    public_repos: PropTypes.number,
    public_gists: PropTypes.number,
    followers: PropTypes.number,
    following: PropTypes.number
  }).isRequired
};

export default UserPage;
