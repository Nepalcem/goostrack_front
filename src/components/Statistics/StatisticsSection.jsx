import React, { useEffect, useState } from 'react';
import { StatisticsSectionContainer } from './StatisticsSection.styled';
import PeriodPaginatorStatistics from './PaginatorStatistics/PaginatorStatistics';
import { StatisticsChart } from './StatisticsChart/StatisticsChart';
import { useDispatch } from 'react-redux';
import { editTitle } from 'redux/title/titleSlice';
import { fetchAllTasks } from 'redux/tasks/tasksOperation';
import { selectTasks } from 'redux/tasks/tasksSelectors';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

const StatisticsSection = () => {
  // Текст заголовку цієї сторінки

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(editTitle('Statistics'));
  });

  const [date, setDate] = useState(new Date());
  const currentDate = format(date, 'yyyy-MM-dd');
  
  const day = currentDate.slice(8, 10);
  const month = currentDate.slice(5, 7);
  const year = currentDate.slice(0, 4);

  useEffect(() => {
    dispatch(fetchAllTasks({ year, month, day }));
  }, [dispatch, year, month, day]);
  let tasksByMonth = useSelector(selectTasks);

  // const date = '2023-09-04'; // умовна дата
  const tasksByDay = tasksByMonth.filter(item => item.date === currentDate);

  ///////////////////////////////////////////

  //------ОБРОБКА ДАНИХ МІСЯЦЯ------//
  // початкові стани змінних в яких зберігаємо кількості тасків місяця
  // to-do, in-progress, done (нулі)
  let mToDo = 0;
  let mInP = 0;
  let mDone = 0;

  // перебираємо циклом і рахуємо кількість тасок to-do, in-progress, done в місяці
  for (let item of tasksByMonth) {
    if (item.category === 'to-do') {
      mToDo += 1;
    }
    if (item.category === 'in-progress') {
      mInP += 1;
    }
    if (item.category === 'done') {
      mDone += 1;
    }
  }

  // рахуємо залаьну кількість тасок в місяці
  let allCountByM = tasksByMonth.length;

  // рахуємо відсоток тасок в місяці і округлюємо до сотих
  let percTodoM = mToDo === 0 ? 0 : ((mToDo / allCountByM) * 100).toFixed(0);
  let percInprM = mInP === 0 ? 0 : ((mInP / allCountByM) * 100).toFixed(0);
  let percDoneM = mDone === 0 ? 0 : ((mDone / allCountByM) * 100).toFixed(0);

  //------ОБРОБКА ДАНИХ ДНЯ------//
  // початкові стани змінних в яких зберігаємо кількості тасків дня
  // to-do, in-progress, done (нулі)
  let dToDo = 0;
  let dInP = 0;
  let dDone = 0;

  // перебираємо циклoм і рахуємо кількість тасок to-do, in-progress, done в дні
  for (let item of tasksByDay) {
    if (item.category === 'to-do') {
      dToDo += 1;
    }
    if (item.category === 'in-progress') {
      dInP += 1;
    }
    if (item.category === 'done') {
      dDone += 1;
    }
  }

  // рахуємо залаьну кількість тасок в дні
  let allCountByD = tasksByDay.length;

  // рахуємо відсоток тасок в місяці і округлюємо до сотих
  let percTodoD = dToDo === 0 ? 0 : ((dToDo / allCountByD) * 100).toFixed(0);
  let percInprD = dInP === 0 ? 0 : ((dInP / allCountByD) * 100).toFixed(0);
  let percDoneD = dDone === 0 ? 0 : ((dDone / allCountByD) * 100).toFixed(0);

  //------ФОРМУЄМО ДАНІ ДЛЯ ГІСТОГРАМИ------//
  let data = [
    {
      name: 'To Do',
      ByDay: Number(percTodoD),
      ByMonth: Number(percTodoM),
    },
    {
      name: 'In Progress',
      ByDay: Number(percInprD),
      ByMonth: Number(percInprM),
    },
    {
      name: 'Done',
      ByDay: Number(percDoneD),
      ByMonth: Number(percDoneM),
    },
  ];
  

  return (
    <StatisticsSectionContainer>
      <PeriodPaginatorStatistics setDate={setDate} date={date} />
      <StatisticsChart data={data} />
    </StatisticsSectionContainer>
  );
};

export default StatisticsSection;
