import React, { Component } from 'react';
import { Validation } from './Validation';

import {
  lastDayOfMonth,
  getYear,
  getMonth,
  getDate,
  startOfDay,
  eachDay,
  getDay,
  isToday
} from 'date-fns';
import './CalendarGrid.scss';

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
        const className = isToday(d)
          ? 'calendar-cell calendar-cell-today'
          : 'calendar-cell';
        return (
          <div className={className} key={i + weekOffset}>
            {getDate(d)}
          </div>
        );
      })
    ];

    return <div className="calendar-grid">{dates}</div>;
  }
}
export default CalendarGrid;
