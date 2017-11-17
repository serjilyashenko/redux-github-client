// @flow
import React from 'react';
import PropTypes from 'prop-types';
import Page404 from '../Page404';

type Props = {
  status?: number,
  message?: string,
};

const ErrorPage = ({ status, message }: Props) => {
  if (Number(status) === 404) {
    return <Page404 />;
  }

  return (
    <div className="row">
      <div className="offset-2">
        <h2>{status || ''}</h2>
        <div>{message}</div>
      </div>
    </div>
  );
};

ErrorPage.defaultProps = {
  status: null,
  message: 'Something Wrong',
};

ErrorPage.propTypes = {
  status: PropTypes.number,
  message: PropTypes.string,
};

export default ErrorPage;
