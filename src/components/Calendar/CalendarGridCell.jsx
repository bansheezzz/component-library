import getDate from 'date-fns/get_date';
import isToday from 'date-fns/is_today';
import PropTypes from 'prop-types';
import React from 'react';

import { Validation } from '../../utilities/Validation';

import styled from 'styled-components';

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
`;

const TodayTextContainer = styled(DateTextContainer)`
  background: lightpink;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;

const CalendarGridCell = ({ date, isCurrent }) => {
  const dateContainer = isToday(date) ? (
    <TodayTextContainer isCurrent={isCurrent}>{getDate(date)}</TodayTextContainer>
  ) : (
    <DateTextContainer isCurrent={isCurrent}>{getDate(date)}</DateTextContainer>
  );
  return (
    <GridCell>
      {dateContainer}
    </GridCell>
  );
};

CalendarGridCell.propTypes = {
  date: Validation.validateDate,
  isCurrent: PropTypes.bool.isRequired
};

export default CalendarGridCell;
