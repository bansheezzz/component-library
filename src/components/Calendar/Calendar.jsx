import './Calendar.scss';

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import CalendarGrid from './CalendarGrid/CalendarGrid';
import CalendarHeader from './CalendarHeader/CalendarHeader';
import { Validation } from './Validation';
import addMonths from 'date-fns/add_months';
import subMonths from 'date-fns/sub_months';
import startOfDay from 'date-fns/start_of_day';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: this.props.selectedDate
    }
  }

  static propTypes = {
    selectedDate: Validation.validateDate,
    monthYearFormat: PropTypes.string
  };

  static defaultProps = {
    monthYearFormat: 'MMMM YYYY'
  };

  previousMonthHandler = () => {
    const date = this.state.selectedDate;
    this.setState({
      selectedDate: subMonths(date, 1)
    });
  }

  nextMonthHandler = () => {
    const date = this.state.selectedDate;
    this.setState({
      selectedDate: addMonths(date, 1)
    });
  }

  setTodayHandler = () => {
    this.setState({
      selectedDate: startOfDay(new Date())
    })
  }

  render() {
    const { monthYearFormat, height, width } = { ...this.props };
    return (
      <div
        className="Calendar"
        style={{ height: height || '300px', width: width || '400px' }}
      >
        <CalendarHeader
          selectedDate={this.state.selectedDate}
          monthYearFormat={monthYearFormat}
          previousMonth={this.previousMonthHandler}
          nextMonth={this.nextMonthHandler}
          setToday={this.setTodayHandler}
        />
        <CalendarGrid selectedDate={this.state.selectedDate} />
      </div>
    );
  }
}

export default Calendar;
