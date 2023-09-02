import React from 'react';
import { useParams } from 'react-router-dom';
import { useResize } from 'hooks/useResize';
import { SCREEN_TABLET, nameDaysMobile, nameDaysTablet } from 'utils/variables';
import { format, eachDayOfInterval, isSunday, addDays } from 'date-fns'; //- для роботи з днями місяця

import {
  DayComponent,
  NameDaysComponent,
  DayNumber,
} from './DayCalendarHead.styled';

const DayCalendarHead = () => {
  const nameDays =
    useResize().width < SCREEN_TABLET ? nameDaysMobile : nameDaysTablet;
  //
  const { currentDay } = useParams();
  const day = currentDay.slice(0, 2);
  const year = currentDay.slice(4);
  const month = currentDay.slice(2, 4);
  const todayUSA = new Date(`${year}, ${month}, ${day}`);
  const todayEuro = addDays(todayUSA, -1);
  const today = !isSunday(todayUSA) ? todayUSA : todayEuro;
  // // ✅ Get the first day of the current week (Sunday)
  const firstDay = new Date(
    today.setDate(today.getDate() - today.getDay() + 1)
  );
  // // ✅ Get the last day of the current week (Saturday)
  const lastDay = new Date(today.setDate(today.getDate() - today.getDay() + 7));
  const daysOfWeek = eachDayOfInterval({
    start: firstDay,
    end: lastDay,
  });
  // const dayNumber = daysOfWeek.map(dayOfWeek => format(dayOfWeek, 'dd'));

  //
  return (
    <NameDaysComponent>
      {nameDays.map((nameDay, index) => (
        <DayComponent key={index} nameDay={nameDay}>
          {nameDay}
          {/* <DayNumber key={daysOfWeek[index]}>{dayNumber[index]}</DayNumber> */}
          <DayNumber key={daysOfWeek[index]}>
            {format(daysOfWeek[index], 'dd')}
          </DayNumber>
        </DayComponent>
      ))}
    </NameDaysComponent>
  );
};
//

export default DayCalendarHead;
