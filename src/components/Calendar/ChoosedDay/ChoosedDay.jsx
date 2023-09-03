import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TasksColumnsList from '../TasksColumnsList/TasksColumnsList';
import { selectTasks } from 'redux/tasks/tasksSelectors';
import { useEffect, useState } from 'react';
import { fetchAllTasks } from 'redux/tasks/tasksOperation';

export const ChoosedDay = () => {
  const dispatch = useDispatch();
  //витягаємо поточний день із адресного рядка
  const { currentDay } = useParams();
  // створюємо стейт в якому будемо зберігати таски поточного дня
  const [currentDayTasks, setCurrentDayTasks] = useState([]);

  // юзефект при оновленні тасків із бази даних
  useEffect(() => {
    dispatch(fetchAllTasks());
  }, [dispatch]);

  // витягаємо в змінну allTasks всі таски

  // !!!!!!!!!!!!
  // !!!!!!!!!!!!
  // !!!!!!!!!!!!
  // !!!!!!!!!!!!
  // ЧОМУСЬ ТІЛЬКИ ПІСЛЯ ПЕРЕКЛЮЧЕННЯ ДНЯ  ТУДТ НАЗАД ЗʼЯВЛЯЮТЬСЯ ТАСКИ!!!!!

  const allTasks = useSelector(selectTasks) ?? [];

  // юзефект який витягає в currentDayTasks таски поточного дня
  useEffect(() => {
    let tempTasks = allTasks.filter(item => item.date === currentDay);
    setCurrentDayTasks(tempTasks);
  }, [currentDay, allTasks]);

  return (
    <div>
      {/* <DayCalendarHead /> */}
      <TasksColumnsList tasksPerDay={currentDayTasks} />
    </div>
  );
};

// "1. Компонент рендериться на розширеному маршруті сторінки /calendar/day/:currentDay
// 2. Компонент підписаний на колекцію завдань з глобального стейту
// 3. Компонент визначає завдання для обраного дня, фільтрує за ступенем віиконання To do | In progress | Done та показує і відповідних колонках.
// 5. Компонент рендерить:
//  - DayCalendarHead - дні тижня з датами, клік по дню з датою показує колонки з задачами за обраний день.
//  - TasksColumnsList - блок з трьома колонками списків завданнь - TasksColumn (To do | In progress | Done). На мобільній та планшетній версії має горизонтальний скрол, якщо колонок більше ніж вміщає ширина екрану пристрою юзера."
