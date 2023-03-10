import React from 'react';
import CurrentDate from './../CurrentDate';
import Month from './../Month';
import styles from './../Calendar/Calendar.module.sass';

const Calendar = () => {
  return (
    <div className={styles.calendar}>
      <CurrentDate />
      <Month />
    </div>
  );
};

export default Calendar;
