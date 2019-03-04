import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DefaultButton = styled.button`
  background: white;
  transition: all 0.2s ease-in;
  border: 1px solid #ddd;
  padding: 5px 10px 5px 10px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: #eee;
  }
`;

const RoundButton = styled(DefaultButton)`
  height: 25px;
  width: 25px;
  border-radius: 50px;
  border: none;
`;

const Button = ({ children, onClick, round }) => {
  const button = round ? (
    <RoundButton onClick={onClick}>{children}</RoundButton>
  ) : (
    <DefaultButton onClick={onClick}>{children}</DefaultButton>
  );
  return button;
};

Button.propTypes = {
  round: PropTypes.bool,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
