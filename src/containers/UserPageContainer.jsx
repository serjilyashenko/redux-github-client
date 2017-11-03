import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserPage from 'components/UserPage';
import { getUserState } from 'redux/reducer';
import { fetchUser } from 'redux/user/actions';
import PageWrapper from 'components/PageWrapper';

class UserPageContainer extends Component {
  static defaultProps = {
    user: null,
    error: null
  };

  static propTypes = {
    user: PropTypes.shape({}),
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.shape({}),
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
    const { isLoading, error, user } = this.props;
    const pageContent = user ? <UserPage user={user} /> : null;

    return (
      <PageWrapper isLoading={isLoading} error={error}>
        {pageContent}
      </PageWrapper>
    );
  }
}

const mapStateIntoProps = (state, ownProps) => ({
  login: ownProps.match.params.login,
  user: getUserState(state).data,
  isLoading: getUserState(state).loading,
  error: getUserState(state).error
});

export default connect(mapStateIntoProps)(UserPageContainer);
