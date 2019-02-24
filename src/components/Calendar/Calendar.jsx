import PropTypes from 'prop-types';
import React, { Component } from 'react';

import CalendarGrid from './CalendarGrid/CalendarGrid';
import CalendarHeader from './CalendarHeader/CalendarHeader';
import { Validation } from './Validation';
import './Calendar.scss';

class Calendar extends Component {
  static propTypes = {
    selectedDate: Validation.validateDate,
    monthYearFormat: PropTypes.string
  };

  static defaultProps = {
    monthYearFormat: 'MMMM YYYY'
  };

  render() {
    const { selectedDate, monthYearFormat, height, width } = { ...this.props };
    return (
      <div
        className="calendar"
        style={{ height: height || '300px', width: width || '400px' }}
      >
        <CalendarHeader selectedDate={selectedDate} monthYearFormat={monthYearFormat} />
        <CalendarGrid selectedDate={selectedDate} />
      </div>
    );
  }
}

export default Calendar;
