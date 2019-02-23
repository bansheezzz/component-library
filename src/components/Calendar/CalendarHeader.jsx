import format from 'date-fns/format';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Validation } from './Validation';

import './CalendarHeader.scss';

class CalendarHeader extends Component {
  static propTypes = {
    selectedDate: Validation.validateDate,
    monthYearFormat: PropTypes.string
  };

  static defaultProps = {
    monthYearFormat: 'MMM, YYYY'
  };

  render() {
    const date = this.props.selectedDate;
    const fmt = this.props.monthYearFormat;
    return <div className="month-year">{`${format(date, fmt)}`}</div>
  }
}
export default CalendarHeader