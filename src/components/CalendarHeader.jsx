import format from 'date-fns/format';
import PropTypes from 'prop-types';
import React from 'react';

import Button from './Button';
import { Validation } from '../utilities/Validation';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  .buttons,
  .month-year {
    display: flex;
    button:not(:first-child) {
      margin-left: 10px;
    }
  }
  .month-year {
    font-size: 1.4em;
    margin-left: 10px;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  Button:not(:first-child) {
    margin-left: 10px;
  }
`;

const MonthYearSection = styled(HeaderSection)`
  font-size: 1.4em;
  margin-left: 10px;
`;

const CalendarHeader = props => {
  const {
    selectedDate,
    monthYearFormat,
    nextMonth,
    previousMonth,
    setToday
  } = { ...props };
  return (
    <Header>
      <HeaderSection>
        <Button onClick={setToday}>Today</Button>
        <Button round={true} onClick={previousMonth}>
          &lt;
        </Button>
        <Button round={true} onClick={nextMonth}>
          &gt;
        </Button>
      </HeaderSection>
      <MonthYearSection>
        {`${format(selectedDate, monthYearFormat)}`}
      </MonthYearSection>
    </Header>
  );
};

CalendarHeader.propTypes = {
  selectedDate: Validation.validateDate,
  monthYearFormat: PropTypes.string.isRequired,
  nextMonth: PropTypes.func.isRequired,
  previousMonth: PropTypes.func.isRequired,
  setToday: PropTypes.func.isRequired
};

export default CalendarHeader;
