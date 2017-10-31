import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import UserPage from 'components/UserPage';
import {getUser} from 'redux/reducer';
import {fetchUser} from 'redux/user/actions';

class UserPageContainer extends Component {
  static propTypes = {
    user: PropTypes.shape({}).isRequired,
    login: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  componentDidMount() {
    const {login, dispatch} = this.props;
    dispatch(fetchUser(login));
  }

  render() {
    return <UserPage login={this.props.login} user={this.props.user}/>;
  }
}

const mapStateIntoProps = (state, ownProps) => ({
  login: ownProps.match.params.user,
  user: getUser(state)
});

export default connect(mapStateIntoProps)(UserPageContainer);
