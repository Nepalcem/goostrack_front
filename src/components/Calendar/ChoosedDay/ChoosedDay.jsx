// import { useParams } from 'react-router-dom';
// import DayCalendarHead from '../DayCalendarHead/DayCalendarHead';
import DayCalendarBody from '../DayCalendarBody/DayCalendarBody';

export const ChoosedDay = () => {
  // const { currentDay } = useParams();

  const tasksPerDay = [
    {
      _id: {
        $oid: '64edd176925ecde7e5d77703',
      },
      title: 'NATALIA',
      start: '14:00',
      end: '15:00',
      date: '2023-08-27',
      priority: 'low',
      category: 'to-do',
      owner: {
        $oid: '64edbfb375c6af6258e298e6',
      },
      description: 'chack the price of car',
      createdAt: {
        $date: '2023-08-29T11:07:34.000Z',
      },
      updatedAt: {
        $date: '2023-08-29T15:13:58.617Z',
      },
    },

    {
      _id: {
        $oid: '64ee036108c0d2588ee85f63',
      },
      title: 'IRYNKA',
      start: '10:00',
      end: '11:00',
      date: '2023-08-29',
      priority: 'medium',
      category: 'done',
      owner: {
        $oid: '64edbfb375c6af6258e298e6',
      },
      description: 'descript',
      createdAt: {
        $date: '2023-08-29T14:40:33.513Z',
      },
      updatedAt: {
        $date: '2023-08-29T14:40:33.513Z',
      },
    },

    {
      _id: {
        $oid: '64ee03e60619825ba8a8560c',
      },
      title: 'SVETLANA',
      start: '18:00',
      end: '22:00',
      date: '2023-08-17',
      priority: 'high',
      category: 'in-progress',
      owner: {
        $oid: '64edbfb375c6af6258e298e6',
      },
      description: 'descript',
      createdAt: {
        $date: '2023-08-29T14:42:46.043Z',
      },
      updatedAt: {
        $date: '2023-08-29T14:42:46.043Z',
      },
    },
  ];

  return (
    <div>
      {/* <DayCalendarHead /> */}
      <DayCalendarBody tasksPerDay={tasksPerDay} />
    </div>
  );
};

// "1. Компонент рендериться на розширеному маршруті сторінки /calendar/day/:currentDay
// 2. Компонент підписаний на колекцію завдань з глобального стейту
// 3. Компонент визначає завдання для обраного дня, фільтрує за ступенем віиконання To do | In progress | Done та показує і відповідних колонках.
// 5. Компонент рендерить:
//  - DayCalendarHead - дні тижня з датами, клік по дню з датою показує колонки з задачами за обраний день.
//  - TasksColumnsList - блок з трьома колонками списків завданнь - TasksColumn (To do | In progress | Done). На мобільній та планшетній версії має горизонтальний скрол, якщо колонок більше ніж вміщає ширина екрану пристрою юзера."
