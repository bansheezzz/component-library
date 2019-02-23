import './CalendarGrid.scss';

import {
  eachDay,
  getDay,
  getMonth,
  getYear,
  lastDayOfMonth,
  startOfDay,
  addDays,
  subDays,
  subMonths,
  lastDayOfWeek
} from 'date-fns';
import React, { Component } from 'react';

import CalendarGridCell from './CalendarGridCell/CalendarGridCell';
import { Validation } from '../Validation';

class CalendarGrid extends Component {
  static propTypes = {
    selectedDate: Validation.validateDate
  };

  renderCell(date, isCurrent) {
    return <CalendarGridCell date={date} key={date.toString} isCurrent={isCurrent} />;
  }

  render() {
    const date = startOfDay(this.props.selectedDate);
    const firstDayCurrent = new Date(getYear(date), getMonth(date), 1);
    const lastDayCurrent = lastDayOfMonth(date);
    const weekOffset = getDay(firstDayCurrent);
    const lastDayLast = lastDayOfMonth(subMonths(date, 1));

    const dates = [
      ...eachDay(subDays(lastDayLast, weekOffset - 1), lastDayLast).map(d =>
        this.renderCell(d, false)
      ),
      ...eachDay(firstDayCurrent, lastDayCurrent).map(d => this.renderCell(d, true)),
      ...eachDay(addDays(lastDayCurrent, 1), lastDayOfWeek(lastDayCurrent)).map(d => this.renderCell(d, false))
    ];

    return <div className="calendar-grid">{dates}</div>;
  }
}
export default CalendarGrid;
