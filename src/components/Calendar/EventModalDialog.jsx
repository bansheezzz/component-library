import React, { Component } from 'react';

import styled from 'styled-components';
import ModalOverlay from '../shared/ModalOverlay';

const Dialog = styled.div`
  height: 300px;
  width: 300px;
  border-radius: 10px;
  background: white;
  z-index: 200;
  position: absolute;
  padding: 20px;
  top: ${props => `${props.yOffset}px`};
  left: ${props => `${props.xOffset}px`};
`;

class EventModalDialog extends Component {
  render() {
    const {xOffset, yOffset} = this.props;
    return (
      <div>
        <Dialog xOffset={xOffset} yOffset={yOffset}>test</Dialog>
        <ModalOverlay />
      </div>
    );
  }
}
export default EventModalDialog;
