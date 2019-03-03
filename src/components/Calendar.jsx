// import './Calendar.scss';

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import CalendarGrid from './CalendarGrid';
import CalendarHeader from './CalendarHeader';
import { Validation } from '../utilities/Validation';
import addMonths from 'date-fns/add_months';
import subMonths from 'date-fns/sub_months';
import startOfDay from 'date-fns/start_of_day';

import styled from 'styled-components';

const CalendarContainer = styled.div`
  border: 1px solid #eee;
  background: white;
  display: grid;
  grid-template-rows: 40px 1fr;
  font-size: 14px;
`;

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: this.props.selectedDate
    };
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
  };

  nextMonthHandler = () => {
    const date = this.state.selectedDate;
    this.setState({
      selectedDate: addMonths(date, 1)
    });
  };

  setTodayHandler = () => {
    this.setState({
      selectedDate: startOfDay(new Date())
    });
  };

  render() {
    const { monthYearFormat, height, width } = { ...this.props };
    return (
      <CalendarContainer
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
      </CalendarContainer>
    );
  }
}

export default Calendar;
