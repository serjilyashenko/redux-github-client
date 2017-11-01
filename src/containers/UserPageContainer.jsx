import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserPage from 'components/UserPage';
import { getUser, isUserLoading } from 'redux/reducer';
import { fetchUser } from 'redux/user/actions';

class UserPageContainer extends Component {
  static propTypes = {
    user: PropTypes.shape({}).isRequired,
    isLoading: PropTypes.bool.isRequired,
    login: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { login, dispatch } = this.props;
    dispatch(fetchUser(login));
  }

  componentWillReceiveProps(nextProps) {
    const { login, dispatch } = nextProps;
    if (login !== this.props.login) {
      dispatch(fetchUser(login));
    }
  }

  render() {
    const { isLoading } = this.props;

    return isLoading ? <div>Loading...</div> : <UserPage user={this.props.user} />;
  }
}

const mapStateIntoProps = (state, ownProps) => ({
  login: ownProps.match.params.login,
  user: getUser(state) || {},
  isLoading: isUserLoading(state)
});

export default connect(mapStateIntoProps)(UserPageContainer);
