import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserPage from 'components/UserPage';
import { getUserState } from 'redux/reducer';
import { fetchUser } from 'redux/user/actions';
import PageWrapper from 'components/PageWrapper';

const UserPageContainer = ({ payload: { data, loading, error }, id, dispatch }) => (
  <PageWrapper id={id} loading={loading} error={error} fetchData={() => dispatch(fetchUser(id))}>
    <UserPage user={data || {}} />
  </PageWrapper>
);

UserPageContainer.propTypes = {
  payload: PropTypes.shape({
    data: PropTypes.shape({}),
    loading: PropTypes.bool,
    error: PropTypes.shape()
  }).isRequired,
  id: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state, { match: { params } }) => ({
  id: params.login,
  payload: getUserState(state)
});

export default connect(mapStateToProps)(UserPageContainer);
