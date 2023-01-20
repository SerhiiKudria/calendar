import moment from 'moment';
import React from 'react';
import { useContext } from 'react';
import { CurrentDataContext } from './../Context';
import { format } from 'date-fns';
import Week from './../Week';
import styles from './../Month/Month.module.sass';

const addWeeksToDate = (dateObj, numberOfWeeks) => {
  let newDate = new Date(
    dateObj.getFullYear(),
    dateObj.getMonth(),
    dateObj.getDate()
  );
  newDate.setDate(dateObj.getDate() + numberOfWeeks * 7);
  return newDate;
};

const Month = () => {
  const currentDate = new Date(useContext(CurrentDataContext));

  const firstDayDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );

  return (
    <div className={styles.month}>
      <table>
        <caption className={styles.caption}>
          {format(currentDate, 'MMMM yyyy')}
        </caption>
        <thead className={styles.thead}>
          <tr>
            <th>S</th>
            <th>M</th>
            <th>T</th>
            <th>W</th>
            <th>T</th>
            <th>F</th>
            <th>S</th>
          </tr>
        </thead>
        <tbody>
          <Week dateBegin={addWeeksToDate(firstDayDate, 0)} />
          <Week dateBegin={addWeeksToDate(firstDayDate, 1)} />
          <Week dateBegin={addWeeksToDate(firstDayDate, 2)} />
          <Week dateBegin={addWeeksToDate(firstDayDate, 3)} />
          <Week dateBegin={addWeeksToDate(firstDayDate, 4)} />
          <Week dateBegin={addWeeksToDate(firstDayDate, 5)} />
        </tbody>
      </table>
    </div>
  );
};

export default Month;
