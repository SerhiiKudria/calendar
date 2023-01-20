import moment from 'moment';
import React from 'react';
import { useContext } from 'react';
import { CurrentDataContext } from './../Context';
import { format, getDay } from 'date-fns';
import styles from './../Week/Week.module.sass';

const Week = (props) => {
  const { dateBegin } = props;
  const currentDate = new Date(useContext(CurrentDataContext));

  const addDaysToDate = (dateObj, numberOfDays) => {
    let newDate = new Date(
      dateObj.getFullYear(),
      dateObj.getMonth(),
      dateObj.getDate()
    );
    newDate.setDate(dateObj.getDate() + numberOfDays);
    return newDate;
  };

  const getWeekDay = (dayOfWeek) => {
    if (dayOfWeek.getMonth() !== currentDate.getMonth()) {
      return <td></td>;
    }
    const dayClassName =
      currentDate.getTime() === dayOfWeek.getTime() ? styles.selected : '';
    return <td className={dayClassName}>{dayOfWeek.getDate()}</td>;
  };

  if (dateBegin.getMonth() > currentDate.getMonth()) {
    return <></>;
  }

  return (
    <tr>
      {getWeekDay(addDaysToDate(dateBegin, 0))}
      {getWeekDay(addDaysToDate(dateBegin, 1))}
      {getWeekDay(addDaysToDate(dateBegin, 2))}
      {getWeekDay(addDaysToDate(dateBegin, 3))}
      {getWeekDay(addDaysToDate(dateBegin, 4))}
      {getWeekDay(addDaysToDate(dateBegin, 5))}
      {getWeekDay(addDaysToDate(dateBegin, 6))}
    </tr>
  );
};

export default Week;
