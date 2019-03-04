import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  background: #aaa;
  opacity: 0.7;
  height: 100%;
  width: 100%;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
`;

const ModalOverlay = ({ children }) => {
  return <Overlay />;
};
export default ModalOverlay;
