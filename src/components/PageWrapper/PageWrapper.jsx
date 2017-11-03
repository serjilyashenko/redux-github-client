import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'components/Spinner';
import ErrorPage from 'components/ErrorPage';

const PageWrapper = props => {
  const { isLoading, error, children } = props;
  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorPage status={error.status} message={error.message} />;
  }

  return children;
};

PageWrapper.defaultProps = {
  error: null,
  children: null
};

PageWrapper.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.shape({}),
  children: PropTypes.node
};

export default PageWrapper;
