import React, { useEffect } from 'react';
import { StatisticsSectionContainer } from './StatisticsSection.styled';
import PeriodPaginatorStatistics from './PaginatorStatistics/PaginatorStatistics';
import { StatisticsChart } from './StatisticsChart/StatisticsChart';
import { useDispatch } from 'react-redux';
import { editTitle } from 'redux/title/titleSlice';
import { fetchAllTasks } from 'redux/tasks/tasksOperation';
import { selectTasks } from 'redux/tasks/tasksSelectors';
import { useSelector } from 'react-redux';

const StatisticsSection = () => {
  // Текст заголовку цієї сторінки
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(editTitle('Statistics'));
  });

  // const data = [
  //   { name: 'To Do', ByDay: 50, ByMonth: 50 },
  //   { name: 'In Progress', ByDay: 100, ByMonth: 24 },
  //   { name: 'Done', ByDay: 35, ByMonth: 24 },
  // ];

  const year = '2023';
  const month = '09';
  const day = '04';

  useEffect(() => {
    dispatch(fetchAllTasks({ year, month, day }));
  }, [dispatch, year, month, day]);
  let tasksByMonth = useSelector(selectTasks);

  const date = '2023-09-04'; // умовна дата
  const tasksByDay = tasksByMonth.filter(item => item.date === date);

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
  let percTodoM = ((mToDo / allCountByM) * 100).toFixed(0);
  let percInprM = ((mInP / allCountByM) * 100).toFixed(0);
  let percDoneM = ((mDone / allCountByM) * 100).toFixed(0);

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
  let percTodoD = ((dToDo / allCountByD) * 100).toFixed(0);
  let percInprD = ((dInP / allCountByD) * 100).toFixed(0);
  let percDoneD = ((dDone / allCountByD) * 100).toFixed(0);

  //------ФОРМУЄМО ДАНІ ДЛЯ ГІСТОГРАМИ------//
  let data = [
    {
      name: 'To Do',
      ByDay: percTodoD,
      ByMonth: percTodoM,
    },
    {
      name: 'In Progress',
      ByDay: percInprD,
      ByMonth: percInprM,
    },
    {
      name: 'Done',
      ByDay: percDoneD,
      ByMonth: percDoneM,
    },
  ];
  console.log(data);

  return (
    <StatisticsSectionContainer>
      <PeriodPaginatorStatistics />
      <StatisticsChart data={data} />
    </StatisticsSectionContainer>
  );
};

export default StatisticsSection;
