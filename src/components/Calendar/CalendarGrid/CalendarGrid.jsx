import './CalendarGrid.scss';

import {
  addDays,
  eachDay,
  getDay,
  getMonth,
  getYear,
  lastDayOfMonth,
  lastDayOfWeek,
  startOfDay,
  subDays,
  subMonths
} from 'date-fns';
import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Validation } from '../Validation';
import CalendarGridCell from './CalendarGridCell/CalendarGridCell';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

class CalendarGrid extends Component {
  static propTypes = {
    selectedDate: Validation.validateDate
  };

  renderDateCell(date, isCurrent) {
    return (
      <CalendarGridCell
        date={date}
        key={date.toString()}
        isCurrent={isCurrent}
      />
    );
  }

  renderWeekdayHeader() {
    return WEEKDAYS.map((w, i) => <div key={i}>{w}</div>);
  }

  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
    this.renderDateCell = this.renderDateCell.bind(this);
    this.renderWeekdayHeader = this.renderWeekdayHeader.bind(this);
    this.setVisible = this.setVisible.bind(this);
  }

  componentDidUpdate(prevProps) {
    const prevDate = prevProps.selectedDate;
    const currentDate = this.props.selectedDate;
    console.log('date', prevDate, currentDate);
    if (prevDate !== currentDate) {
      this.setVisible(false);
    }
  }

  setVisible(visible) {
    this.setState({
      visible: visible
    });
  }

  render() {
    const date = startOfDay(this.props.selectedDate);
    const firstDayCurrent = new Date(getYear(date), getMonth(date), 1);
    const lastDayCurrent = lastDayOfMonth(date);
    const weekOffset = getDay(firstDayCurrent);
    const lastDayLast = lastDayOfMonth(subMonths(date, 1));
    const lastDayWeek = lastDayOfWeek(lastDayCurrent);
    const { visible } = { ...this.state };

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

    const calendarGrid = visible ? (
      <div className="CalendarGrid">
        <div className="week">{this.renderWeekdayHeader()}</div>
        <div className="dates">{dates}</div>
      </div>
    ) : (
      <div />
    );
    return (
      <CSSTransition
        in={visible}
        classNames="fade"
        timeout={200}
        onExited={() => {
          this.setVisible(true);
        }}
      >
        {calendarGrid}
      </CSSTransition>
    );
  }
}

export default CalendarGrid;
