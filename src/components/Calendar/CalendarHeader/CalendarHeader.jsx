import format from 'date-fns/format';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Validation } from '../Validation';

import './CalendarHeader.scss';

class CalendarHeader extends Component {
  static propTypes = {
    selectedDate: Validation.validateDate,
    monthYearFormat: PropTypes.string.isRequired
  };

  render() {
    const {selectedDate, monthYearFormat} = {...this.props}
    return <div className="month-year">{`${format(selectedDate, monthYearFormat)}`}</div>
  }
}
export default CalendarHeader