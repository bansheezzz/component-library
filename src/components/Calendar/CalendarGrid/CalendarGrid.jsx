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

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

class CalendarGrid extends Component {
  static propTypes = {
    selectedDate: Validation.validateDate
  };

  renderWeekdayHeader = () => {
    return (
      WEEKDAYS.map((w, i) => (
        <div key={i}>{w}</div>
      ))
    );
  }

  renderDateCell = (date, isCurrent) => {
    return (
      <CalendarGridCell
        date={date}
        key={date.toString()}
        isCurrent={isCurrent}
      />
    );
  }

  render() {
    const date = startOfDay(this.props.selectedDate);
    const firstDayCurrent = new Date(getYear(date), getMonth(date), 1);
    const lastDayCurrent = lastDayOfMonth(date);
    const weekOffset = getDay(firstDayCurrent);
    const lastDayLast = lastDayOfMonth(subMonths(date, 1));
    const lastDayWeek = lastDayOfWeek(lastDayCurrent);

    const priorMonth =
      weekOffset > 0
        ? eachDay(subDays(lastDayLast, weekOffset - 1), lastDayLast).map(d =>
            this.renderDateCell(d, false)
          )
        : [];
    const nextMonth =
      getDay(lastDayCurrent) < WEEKDAYS.length - 1
        ? eachDay(addDays(lastDayCurrent, 1), lastDayWeek).map(d =>
            this.renderDateCell(d, false)
          )
        : [];
    const dates = [
      ...priorMonth,
      ...eachDay(firstDayCurrent, lastDayCurrent).map(d =>
        this.renderDateCell(d, true)
      ),
      ...nextMonth
    ];

    return (
      <div className="calendar-grid">
        <div className="week">
          {this.renderWeekdayHeader()}
        </div>
        <div className="dates">{dates}</div>
      </div>
    );
  }
}
export default CalendarGrid;
