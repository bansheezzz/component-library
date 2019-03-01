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
import React from 'react';

import CalendarGridCell from './CalendarGridCell/CalendarGridCell';
import { Validation } from '../Validation';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const renderDateCell = (date, isCurrent) => {
  return (
    <CalendarGridCell date={date} key={date.toString()} isCurrent={isCurrent} />
  );
};

const renderWeekdayHeader = () => {
  return WEEKDAYS.map((w, i) => <div key={i}>{w}</div>);
};

const CalendarGrid = props => {
  const date = startOfDay(props.selectedDate);
  const firstDayCurrent = new Date(getYear(date), getMonth(date), 1);
  const lastDayCurrent = lastDayOfMonth(date);
  const weekOffset = getDay(firstDayCurrent);
  const lastDayLast = lastDayOfMonth(subMonths(date, 1));
  const lastDayWeek = lastDayOfWeek(lastDayCurrent);

  const priorMonth =
    weekOffset > 0
      ? eachDay(subDays(lastDayLast, weekOffset - 1), lastDayLast).map(d =>
          renderDateCell(d, false)
        )
      : [];
  const nextMonth =
    getDay(lastDayCurrent) < WEEKDAYS.length - 1
      ? eachDay(addDays(lastDayCurrent, 1), lastDayWeek).map(d =>
          renderDateCell(d, false)
        )
      : [];
  const dates = [
    ...priorMonth,
    ...eachDay(firstDayCurrent, lastDayCurrent).map(d =>
      renderDateCell(d, true)
    ),
    ...nextMonth
  ];

  return (
    <div className="CalendarGrid">
      <div className="week">{renderWeekdayHeader()}</div>
      <div className="dates">{dates}</div>
    </div>
  );
};

CalendarGrid.propTypes = {
  selectedDate: Validation.validateDate
};

export default CalendarGrid;
