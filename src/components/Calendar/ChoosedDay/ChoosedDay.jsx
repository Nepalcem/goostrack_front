import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TasksColumnsList from '../TasksColumnsList/TasksColumnsList';
// import { selectTasks } from 'redux/tasks/tasksSelectors';
import { useEffect } from 'react';
import DayCalendarHead from '../DayCalendarHead/DayCalendarHead';

import { fetchAllTasks } from 'redux/tasks/tasksOperation';
import { selectTasks } from 'redux/tasks/tasksSelectors';

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
    dispatch(fetchAllTasks({ day, month, year }));
  }, [day, dispatch, month, year]);
  const allTasks = useSelector(selectTasks);
  const todayTasks = allTasks.filter(item => item.date === currentDay);
  return (
    <div>
      <DayCalendarHead />
      <TasksColumnsList tasksPerDay={todayTasks} />
    </div>
  );
};
