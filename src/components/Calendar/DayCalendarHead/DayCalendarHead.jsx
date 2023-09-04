import React from 'react';
import { useParams } from 'react-router-dom';
import { useResize } from 'hooks/useResize';
import { SCREEN_TABLET, nameDaysMobile, nameDaysTablet } from 'utils/variables';
import { format, eachDayOfInterval, isSunday, addDays } from 'date-fns';

import {
  DayComponent,
  NameDaysComponent,
  DayNumber,
  CurrentDayNumber,
} from './DayCalendarHead.styled';

const DayCalendarHead = () => {
  const nameDays =
    useResize().width < SCREEN_TABLET ? nameDaysMobile : nameDaysTablet;

  const { currentDay } = useParams();
  const year = currentDay.slice(0, 4);
  const month = currentDay.slice(5, 7);
  const day = currentDay.slice(8, 10);

  const todayUSA = new Date(`${year}, ${month}, ${day}`);

  const todayEuro = addDays(todayUSA, -1);

  const today = !isSunday(todayUSA) ? todayUSA : todayEuro;
  // ✅ Get the first day of the current week (USA standart Sunday + 1 = Euro standart Monday)
  const firstDay = new Date(
    today.setDate(today.getDate() - today.getDay() + 1)
  );
  // ✅ Get the last day of the current week (USA standart Saturday => Euro standart Sunday)
  const lastDay = new Date(today.setDate(today.getDate() - today.getDay() + 7));
  const daysOfWeek = eachDayOfInterval({
    start: firstDay,
    end: lastDay,
  });

  //
  return (
    <NameDaysComponent>
      {nameDays.map((nameDay, index) => (
        <DayComponent key={index} nameDay={nameDay}>
          {nameDay}

          <DayNumber key={daysOfWeek[index]}>
            <CurrentDayNumber
              currentDay={day}
              day={format(daysOfWeek[index], 'dd')}
            >
              {format(daysOfWeek[index], 'dd')}
            </CurrentDayNumber>
          </DayNumber>
        </DayComponent>
      ))}
    </NameDaysComponent>
  );
};
//

export default DayCalendarHead;
