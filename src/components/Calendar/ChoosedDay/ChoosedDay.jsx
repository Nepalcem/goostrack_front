import DayCalendarHead from '../DayCalendarHead/DayCalendarHead';
import { useParams } from 'react-router-dom';

import { format, eachDayOfInterval, isSunday, addDays } from 'date-fns'; //- для роботи з днями місяця

export const ChoosedDay = () => {
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

  const dayNumber = daysOfWeek.map(dayOfWeek => format(dayOfWeek, 'dd'));
  console.log(dayNumber);
  return (
    <div>
      <DayCalendarHead />
    </div>
  );
};

// "1. Компонент рендериться на розширеному маршруті сторінки /calendar/day/:currentDay
// 2. Компонент підписаний на колекцію завдань з глобального стейту
// 3. Компонент визначає завдання для обраного дня, фільтрує за ступенем віиконання To do | In progress | Done та показує і відповідних колонках.
// 5. Компонент рендерить:
//  - DayCalendarHead - дні тижня з датами, клік по дню з датою показує колонки з задачами за обраний день.
//  - TasksColumnsList - блок з трьома колонками списків завданнь - TasksColumn (To do | In progress | Done). На мобільній та планшетній версії має горизонтальний скрол, якщо колонок більше ніж вміщає ширина екрану пристрою юзера."

// import { format, eachDayOfInterval } from 'date-fns';
// import { enUS } from 'date-fns/locale';

// const daysOfWeek = eachDayOfInterval({ start: new Date(), end: new Date(new
//                   Date().setDate(new Date().getDate() + 6)) });

// const weekdays = daysOfWeek.map((day) => format(day, 'EEE', { locale: enUS }));

// console.log(weekdays); // ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
