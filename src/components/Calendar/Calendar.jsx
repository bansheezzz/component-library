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
    monthYearFormat: 'MMM, YYYY'
  };

  render() {
    const { selectedDate, height, width } = { ...this.props };
    return (
      <div
        className="calendar"
        style={{ height: height || '300px', width: width || '400px' }}
      >
        <CalendarHeader selectedDate={selectedDate} />
        <CalendarGrid selectedDate={selectedDate} />
      </div>
    );
  }
}

export default Calendar;
