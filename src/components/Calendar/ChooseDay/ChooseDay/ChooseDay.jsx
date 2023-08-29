import React from 'react';

import { DayCalendarHead } from '../DayCalendarHead/DayCalendarHead';

export const ChooseDay = ({ period }) => {
  return (
    <div>
      <DayCalendarHead period={period} />
    </div>
  );
};

// "1. Компонент рендериться на розширеному маршруті сторінки /calendar/day/:currentDay
// 2. Компонент підписаний на колекцію завдань з глобального стейту
// 3. Компонент визначає завдання для обраного дня, фільтрує за ступенем віиконання To do | In progress | Done та показує і відповідних колонках.
// 5. Компонент рендерить:
//  - DayCalendarHead - дні тижня з датами, клік по дню з датою показує колонки з задачами за обраний день.
//  - TasksColumnsList - блок з трьома колонками списків завданнь - TasksColumn (To do | In progress | Done). На мобільній та планшетній версії має горизонтальний скрол, якщо колонок більше ніж вміщає ширина екрану пристрою юзера."
