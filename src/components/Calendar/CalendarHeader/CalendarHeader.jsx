import format from 'date-fns/format';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Validation } from '../Validation';

import './CalendarHeader.scss';
import Button from '../../Buttons/Button';

class CalendarHeader extends Component {
  static propTypes = {
    selectedDate: Validation.validateDate,
    monthYearFormat: PropTypes.string.isRequired,
    nextMonth: PropTypes.func.isRequired,
    previousMonth: PropTypes.func.isRequired,
    setToday: PropTypes.func.isRequired
  };

  render() {
    const {
      selectedDate,
      monthYearFormat,
      nextMonth,
      previousMonth,
      setToday
    } = { ...this.props };
    return (
      <div className="header">
        <div className="buttons">
          <Button buttonStyle="flat" onClick={setToday}>
            Today
          </Button>
          <Button buttonStyle="round" onClick={previousMonth}>
            &lt;
          </Button>
          <Button buttonStyle="round" onClick={nextMonth}>
            &gt;
          </Button>
        </div>
        <div className="month-year">{`${format(
          selectedDate,
          monthYearFormat
        )}`}</div>
      </div>
    );
  }
}
export default CalendarHeader;
