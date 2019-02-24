import './CalendarGridCell.scss';

import getDate from 'date-fns/get_date';
import isToday from 'date-fns/is_today';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Validation } from '../../Validation';

class CalendarGridCell extends Component {
  static propType = {
    key: PropTypes.any,
    date: Validation.validateDate,
    isCurrent: PropTypes.bool.isRequired
  };

  render() {
    const { date, key, isCurrent } = { ...this.props };
    const className = isToday(date) ? 'today' : '';
    return (
      <div className="calendar-cell" key={key}>
        <div className={className} style={{color: isCurrent ? 'black' : '#ddd'}}>{getDate(date)}</div>
      </div>
    );
  }
}
export default CalendarGridCell;
