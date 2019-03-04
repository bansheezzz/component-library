import getDate from 'date-fns/get_date';
import isToday from 'date-fns/is_today';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Validation } from '../../utilities/Validation';

import styled from 'styled-components';
import EventModalDialog from './EventModalDialog';

const GridCell = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-left: 1px solid #eee;
  border-bottom: 1px solid #eee;
  font-size: 0.8em;
`;

const DateTextContainer = styled.div`
  color: ${props => (props.isCurrent ? 'black' : '#ddd')};
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

const TodayTextContainer = styled(DateTextContainer)`
  background: lightpink;
  border-radius: 50px;
`;

class CalendarGridCell extends Component {
  static propTypes = {
    date: Validation.validateDate,
    isCurrent: PropTypes.bool.isRequired
  };

  state = {
    showEventDialog: false
  };

  cellRef = React.createRef();

  openEventDialog = date => e => {
    this.setState({
      showEventDialog: true
    })
  };

  getDialogPosition = (parentElement) => {
    const {x, y, width} = parentElement.getBoundingClientRect();
    return {
      xOffset: x + width,
      yOffset: y
    }
  }

  render() {
    const { date, isCurrent } = this.props;
    const { showEventDialog } = this.state;
    const dialog = showEventDialog
      ? <EventModalDialog {...this.getDialogPosition(this.cellRef.current)}/>
      : '';

    const dateContainer = isToday(date) ? (
      <TodayTextContainer isCurrent={isCurrent}>
        {getDate(date)}
      </TodayTextContainer>
    ) : (
      <DateTextContainer isCurrent={isCurrent}>
        {getDate(date)}
      </DateTextContainer>
    );
    return (
      <GridCell ref={this.cellRef} onClick={this.openEventDialog(date)}>
        {dialog}
        {dateContainer}
      </GridCell>
    );
  }
}

export default CalendarGridCell;
