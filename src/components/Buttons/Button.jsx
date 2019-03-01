import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = (props) => {
  const {children, onClick, buttonStyle} = {...props};
  const className = 'button ' + getButtonStyle(buttonStyle);
  return <div className={className} onClick={onClick}>{children}</div>;
}

Button.propTypes = {
  buttonStyle: PropTypes.oneOf(['round', 'flat']).isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};


const getButtonStyle = (buttonStyle) => {
  switch(buttonStyle) {
    case 'round':
      return 'round';
    case 'flat':
      return 'flat';
    default:
      return '';
  };
}

export default Button;