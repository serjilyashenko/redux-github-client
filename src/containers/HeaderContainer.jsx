import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header';

const HeaderContainer = props => {
  const searchValue = props.location.pathname;
  const onSearch = url => props.history.push(url);
  return <Header searchValue={searchValue} onSearch={onSearch} />;
};

HeaderContainer.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default HeaderContainer;
