import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

class Button extends Component {
  static propTypes = {
    buttonStyle: PropTypes.oneOf(['round', 'flat']).isRequired,
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  getButtonStyle = (buttonStyle) => {
    switch(buttonStyle) {
      case 'round':
        return 'round';
      case 'flat':
        return 'flat';
      default:
        return '';
    };
  }

  render() {
    const {children, onClick, buttonStyle} = {...this.props};
    const className = 'button ' + this.getButtonStyle(buttonStyle);
    return <div className={className} onClick={onClick}>{children}</div>;
  }
}
export default Button;