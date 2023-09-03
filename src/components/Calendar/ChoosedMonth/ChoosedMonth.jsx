import React from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import { MonthCalendarHead } from '../MonthCalendarHead/MonthCalendarHead';
import { CalendarTable } from '../CalendarTable/CalendarTable';

export const ChoosedMonth = () => {
  // получаем в CalendarPage день для перехода в ChoosedDay
  const [onClickDate, setOnClickDate] = useOutletContext();
  // получаем CarrentDate из URL
  const { currentDate } = useParams();

  //  вырезаем год
  const year = currentDate.slice(0, 4);

  //  вырезаем месяц
  const month = currentDate.slice(5, 7);

  const onClick = dayMoment => setOnClickDate(dayMoment);

  return (
    <>
      {/* заголовок */}

      <MonthCalendarHead />

      {/* отображение месяца */}
      <CalendarTable month={month} year={year} onClick={onClick} />
    </>
  );
};
//  "1. Модуль рендериться на розширеному маршруті - /calendar/month/:currentDate
// 2. Модуль рендерить компоненти:
//  - MonthCalendarHead - дні тижня без дат
//  - CalendarTable - таблиця з днями обраного місяця, відповідно до днів тижня.
// 3. Модуль підписаний на колекцію задач з глобального стейту."
