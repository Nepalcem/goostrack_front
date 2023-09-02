import React from 'react';
import { useParams } from 'react-router-dom';
import { MonthCalendarHead } from '../MonthCalendarHead/MonthCalendarHead';
import { CalendarTable } from '../CalendarTable/CalendarTable';

export const ChoosedMonth = () => {
  // получаем CarrentDate из URL
  const { currentDate } = useParams();
  //  вырезаем год
  const year = currentDate.slice(2);
  //  вырезаем месяц
  const month = currentDate.slice(0, 2);

  return (
    <>
      {/* заголовок */}

      <MonthCalendarHead />

      {/* отображение месяца */}
      <CalendarTable month={month} year={year} />
    </>
  );
};
//  "1. Модуль рендериться на розширеному маршруті - /calendar/month/:currentDate
// 2. Модуль рендерить компоненти:
//  - MonthCalendarHead - дні тижня без дат
//  - CalendarTable - таблиця з днями обраного місяця, відповідно до днів тижня.
// 3. Модуль підписаний на колекцію задач з глобального стейту."
