import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserShortInfo = ({ user }) => (
  <div className="user-item">
    <img className="user-item__avatar" src={user.avatarUrl} alt="avatar" />
    <div className="user-item__text">
      <Link to={`/${user.login}`} href={`/${user.login}`}>
        {user.login}
      </Link>
      <div>{user.type}</div>
    </div>
  </div>
);

UserShortInfo.defaultProps = {
  user: {}
};

UserShortInfo.propTypes = {
  user: PropTypes.shape({
    avatarUrl: PropTypes.string,
    login: PropTypes.string
  })
};

export default UserShortInfo;
