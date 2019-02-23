import './CalendarGridCell.scss';

import getDate from 'date-fns/get_date';
import isToday from 'date-fns/is_today';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Validation } from './Validation';

class CalendarGridCell extends Component {
  static propType = {
    key: PropTypes.any,
    date: Validation.validateDate
  }

  render() {
    const {date, key} = {...this.props};
    const className = isToday(date)
          ? 'calendar-cell calendar-cell-today'
          : 'calendar-cell';
        return (
          <div className={className} key={key}>
            {getDate(date)}
          </div>
    )
  }
} 
export default CalendarGridCell;