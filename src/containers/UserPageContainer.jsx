import React from 'react';
import PropTypes from 'prop-types';
import UserPage from 'components/UserPage';

const UserPageContainer = props => <UserPage userId={props.match.params.user} />;

UserPageContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      user: PropTypes.string
    })
  }).isRequired
};

export default UserPageContainer;
