import moment from 'moment';
import React from 'react';
import { useContext } from 'react';
import { CurrentDataContext } from './../Context';
import { format } from 'date-fns';
import styles from './../CurrentDate/CurrentDate.module.sass';

const CurrentDate = () => {
  let currentDate = new Date(useContext(CurrentDataContext));

  return (
    <div className={styles.currentDate}>
      <div className={styles.monthName}>{format(currentDate, 'eeee')}</div>
      <div className={styles.currentDay}>{currentDate.getDate()}</div>
    </div>
  );
};

export default CurrentDate;
