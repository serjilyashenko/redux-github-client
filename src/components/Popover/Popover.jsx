// @flow
/* eslint jsx-a11y/mouse-events-have-key-events: 0 */
import React, { Component, type Node } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

type Props = {
  left?: bool,
  content: Node,
  children: Node,
  onShow?: () => void,
  onHide?: () => void,
};

type State = {
  isVisible: boolean,
};

class Popover extends Component<Props, State> {
  static defaultProps = {
    left: false,
    onShow: () => {},
    onHide: () => {},
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
    left: PropTypes.bool,
    onShow: PropTypes.func,
    onHide: PropTypes.func,
  };

  state = {
    isVisible: false,
  };

  handleOnMouseOver = () => {
    const { onShow = () => {} } = this.props;
    const { isVisible } = this.state;
    if (!isVisible) {
      onShow();
    }
    this.setState({ isVisible: true });
  };

  handleOnMouseOut = () => {
    const { onHide = () => {} } = this.props;
    this.setState({ isVisible: false });
    onHide();
  };

  renderPopover() {
    const { content, left } = this.props;
    const { isVisible } = this.state;
    const popoverAreaClasses = classnames({
      'my-popover__area': true,
      'my-popover__area_left': left,
    });

    if (!isVisible) {
      return null;
    }

    return (
      <div className={popoverAreaClasses}>
        <div className="my-popover">{content}</div>
      </div>
    );
  }

  render() {
    const { children } = this.props;
    const popover = this.renderPopover();

    return (
      <div
        className="my-popover__wrapper"
        onMouseOver={this.handleOnMouseOver}
        onMouseLeave={this.handleOnMouseOut}
      >
        {children}
        {popover}
      </div>
    );
  }
}

export default Popover;
