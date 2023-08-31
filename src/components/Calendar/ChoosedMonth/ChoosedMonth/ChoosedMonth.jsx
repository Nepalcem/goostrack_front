import React from 'react';
import { MonthCalendarHead } from '../MonthCalendarHead/MonthCalendarHead';

import { ChooseMonthDiv } from './ChoosedMonth.styled';

export const ChoosedMonth = ({ period }) => {
  return (
    <ChooseMonthDiv>
      <MonthCalendarHead period={period} />
    </ChooseMonthDiv>
  );
};

// "1. Модуль рендериться на розширеному маршруті - /calendar/month/:currentDate
// 2. Модуль рендерить компоненти:
//  - MonthCalendarHead - дні тижня без дат
//  - CalendarTable - таблиця з днями обраного місяця, відповідно до днів тижня.
// 3. Модуль підписаний на колекцію задач з глобального стейту."
