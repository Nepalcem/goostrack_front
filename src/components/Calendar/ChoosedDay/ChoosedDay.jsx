import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TasksColumnsList from '../TasksColumnsList/TasksColumnsList';
// import { selectTasks } from 'redux/tasks/tasksSelectors';
import { useEffect, useState } from 'react';
import DayCalendarHead from '../DayCalendarHead/DayCalendarHead';

import tasksOperations from 'redux/tasks/tasksOperation';


// gкои шо виводжу таски звідси

export const ChoosedDay = () => {
  const dispatch = useDispatch();

  //витягаємо поточний день із адресного рядка  і виносимо їх в змінні
  const { currentDay } = useParams();
  const day = currentDay.slice(8, 10);
  const month = currentDay.slice(5, 7);
  const year = currentDay.slice(0, 4);

  // юзефект оновлення тасків в базі даних при зміні дати
  useEffect(() => {
    dispatch(tasksOperations.fetchAllTasks({ day, month, year }));
  }, [dispatch, currentDay, day, month, year]);

  // створюємо стейт в якому будемо зберігати таски поточного дня
  const [currentDayTasks, setCurrentDayTasks] = useState([]);

  // витягаємо таски із стейту
  let tasks = useSelector(state => state.tasks.items);
  // console.log('tasks', tasks);

  // юзефект який витягає в currentDayTasks таски поточного дня
  useEffect(() => {
    let tempTasks = tasks.filter(item => item.date === currentDay);
    setCurrentDayTasks(tempTasks);
  }, [currentDay, tasks]);

  return (
    <div>
      <DayCalendarHead />
      <TasksColumnsList tasksPerDay={currentDayTasks} />
    </div>
  );
};

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// "1. Компонент рендериться на розширеному маршруті сторінки /calendar/day/:currentDay
// 2. Компонент підписаний на колекцію завдань з глобального стейту
// 3. Компонент визначає завдання для обраного дня, фільтрує за ступенем віиконання To do | In progress | Done та показує і відповідних колонках.
// 5. Компонент рендерить:
//  - DayCalendarHead - дні тижня з датами, клік по дню з датою показує колонки з задачами за обраний день.
//  - TasksColumnsList - блок з трьома колонками списків завданнь - TasksColumn (To do | In progress | Done). На мобільній та планшетній версії має горизонтальний скрол, якщо колонок більше ніж вміщає ширина екрану пристрою юзера."
