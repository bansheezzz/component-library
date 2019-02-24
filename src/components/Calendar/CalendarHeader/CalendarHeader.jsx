import format from 'date-fns/format';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Validation } from '../Validation';

import './CalendarHeader.scss';
import Button from "../../Button/Button";

class CalendarHeader extends Component {
  static propTypes = {
    selectedDate: Validation.validateDate,
    monthYearFormat: PropTypes.string.isRequired,
    nextMonth: PropTypes.func.isRequired,
    previousMonth: PropTypes.func.isRequired
  }

  render() {
    const {selectedDate, monthYearFormat, nextMonth, previousMonth} = {...this.props}
    return (
      <div className="header">
        <div className="buttons">
          <Button onClick={previousMonth}>&lt;</Button>
          <Button onClick={nextMonth}>&gt;</Button>
        </div>
        <div className="month-year">{`${format(selectedDate, monthYearFormat)}`}</div>
      </div>
    )
  }
}
export default CalendarHeader