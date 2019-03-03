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

import { Validation } from '../utilities/Validation';
import CalendarGridCell from './CalendarGridCell';
import styled from 'styled-components';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Grid = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 30px 1fr;
`;

const Cells = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

const TopRow = styled(Cells)`
  border-top: 1px solid #eee;
`;

const Weekday = styled.div`
  border-left: 1px solid #eee;
  text-align: center;
`;

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

  renderWeekdays() {
    return WEEKDAYS.map((w, i) => <Weekday key={i}>{w}</Weekday>);
  }

  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
    this.renderDateCell = this.renderDateCell.bind(this);
    this.renderWeekdays = this.renderWeekdays.bind(this);
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
      <Grid>
        <TopRow>{this.renderWeekdays()}</TopRow>
        <Cells>{dates}</Cells>
      </Grid>
    ) : (
      <Grid />
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
