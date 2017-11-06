/* eslint jsx-a11y/mouse-events-have-key-events: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageWrapper from 'components/PageWrapper';

class Popover extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
    payload: PropTypes.shape({
      data: PropTypes.array,
      loading: PropTypes.bool,
      error: PropTypes.shape()
    }).isRequired,
    id: PropTypes.string.isRequired,
    fetchData: PropTypes.func.isRequired
  };

  state = {
    isVisible: false
  };

  handleOnMouseOver = () => {
    const { fetchData, payload: { data } } = this.props;
    this.setState({ isVisible: true });
    if (!data) {
      fetchData();
    }
  };

  handleOnMouseOut = () => this.setState({ isVisible: false });

  renderPopover() {
    const { payload: { loading, error }, id, content } = this.props;
    const { isVisible } = this.state;

    if (!isVisible) {
      return null;
    }

    return (
      <div className="popover popover_right">
        <PageWrapper id={id} loading={loading} error={error} fetchData={() => {}}>
          {content}
        </PageWrapper>
      </div>
    );
  }

  render() {
    const { children } = this.props;
    const popover = this.renderPopover();

    return (
      <div className="popover__wrapper" onMouseOver={this.handleOnMouseOver} onMouseLeave={this.handleOnMouseOut}>
        {children}
        {popover}
      </div>
    );
  }
}

export default Popover;
