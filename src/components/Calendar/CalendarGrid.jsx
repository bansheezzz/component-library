import './CalendarGrid.scss';

import { eachDay, getDay, getMonth, getYear, lastDayOfMonth, startOfDay } from 'date-fns';
import React, { Component } from 'react';

import CalendarGridCell from './CalendarGridCell';
import { Validation } from './Validation';

class CalendarGrid extends Component {
  static propTypes = {
    selectedDate: Validation.validateDate
  };

  render() {
    const date = startOfDay(this.props.selectedDate);
    const firstDay = new Date(getYear(date), getMonth(date), 1);
    const lastDay = lastDayOfMonth(date);
    const weekOffset = getDay(firstDay);
    const dates = [
      ...Array.from(new Array(weekOffset), (d, i) => <div key={i} />),
      ...eachDay(firstDay, lastDay).map((d, i) => {
        return (
          <CalendarGridCell date={d} key={i + weekOffset} />
        );
      })
    ];

    return <div className="calendar-grid">{dates}</div>;
  }
}
export default CalendarGrid;
