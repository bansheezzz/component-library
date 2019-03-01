import './CalendarGridCell.scss';

import getDate from 'date-fns/get_date';
import isToday from 'date-fns/is_today';
import PropTypes from 'prop-types';
import React from 'react';

import { Validation } from '../../Validation';

const CalendarGridCell = props => {
  const { date, isCurrent } = { ...props };
  const dateClass = `${isCurrent ? 'current-month' : ''} ${
    isToday(date) ? 'today' : ''
  }`;
  return (
    <div className="calendar-cell">
      <div className={dateClass}>{getDate(date)}</div>
    </div>
  );
};

CalendarGridCell.propTypes = {
  date: Validation.validateDate,
  isCurrent: PropTypes.bool.isRequired
};

export default CalendarGridCell;
