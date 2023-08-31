import React from 'react';
import { MonthCalendarHead } from '../MonthCalendarHead/MonthCalendarHead';
import { CalendarTable } from '../CalendarTable/CalendarTable';

export const ChoosedMonth = ({ month, year }) => {
  // console.log(month, year);

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
