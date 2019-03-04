import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.7);
  height: 100vh;
  width: 100vh;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
`;

const ModalOveraly = () => {
  return (
    <Overlay/>
  );
}