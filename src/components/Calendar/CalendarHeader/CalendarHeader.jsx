import './CalendarHeader.scss';

import format from 'date-fns/format';
import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../Buttons/Button';
import { Validation } from '../Validation';

const CalendarHeader = (props) => {
  const {
    selectedDate,
    monthYearFormat,
    nextMonth,
    previousMonth,
    setToday
  } = { ...props };
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

CalendarHeader.propTypes = {
  selectedDate: Validation.validateDate,
  monthYearFormat: PropTypes.string.isRequired,
  nextMonth: PropTypes.func.isRequired,
  previousMonth: PropTypes.func.isRequired,
  setToday: PropTypes.func.isRequired
};

export default CalendarHeader;
