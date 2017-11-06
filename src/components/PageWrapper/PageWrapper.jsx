import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'components/Spinner';
import ErrorPage from 'components/ErrorPage';

class PageWrapper extends Component {
  static defaultProps = {
    loading: false,
    error: null
  };

  static propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.shape({}),
    id: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    fetchData: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.fetchData();
  }

  componentWillReceiveProps(nextProps) {
    const { id, fetchData } = nextProps;
    if (id !== this.props.id) {
      fetchData();
    }
  }

  render() {
    const { loading, error, children } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorPage status={error.status} message={error.message} />;
    }

    return children;
  }
}

export default PageWrapper;
