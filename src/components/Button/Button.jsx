import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

class Button extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  render() {
    const {children, onClick} = {...this.props};
    return <div className="button" onClick={onClick}>{children}</div>;
  }
}
export default Button;