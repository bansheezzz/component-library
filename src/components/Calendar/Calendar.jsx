import PropTypes from 'prop-types';
import React, { Component } from 'react';

import CalendarGrid from './CalendarGrid';
import CalendarHeader from './CalendarHeader';
import { Validation } from './Validation';
import './Calendar.scss';

class Calendar extends Component {
  static propTypes = {
    selectedDate: Validation.validateDate,
    monthYearFormat: PropTypes.string
  };

  static defaultProps = {
    monthYearFormat: 'MMM, YYYY'
  }


  render() {
    const date = this.props.selectedDate;
    return (
      <div className="calendar">
        <CalendarHeader
          selectedDate={date}
        />
        <CalendarGrid selectedDate={date}/>
      </div>
    );
  }
}

export default Calendar;
