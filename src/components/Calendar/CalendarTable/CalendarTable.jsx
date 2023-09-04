import React, { useEffect } from 'react';
import moment from 'moment';

import {
  CalendarTableDiv,
  CalendarRow,
  CalenderCell,
  NumberDay,
  OneTaskInTable,
} from './CalendarTable.styled';
import { useDispatch, useSelector } from 'react-redux';
import tasksOperations from 'redux/tasks/tasksOperation';

//возвращает количество дней в каждой недели
export const getDaysInMonth = monthMoment => {
  const monthCopy = monthMoment.clone();
  monthCopy.startOf('month');

  let days = [];

  while (monthCopy.month() === monthMoment.month()) {
    days.push(monthCopy.clone());
    monthCopy.add(1, 'days');
  }
  return days;
};

//делим на недели
export const segmentIntoWeeks = dayMoments => {
  let weeks = [];
  let currentWeek = [];

  for (let day of dayMoments) {
    currentWeek.push(day.clone());

    if (day.format('dddd') === 'Sunday') {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }

  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  return weeks;
};
// заполнение пустіми датами передние дни первой недели
const padWeekFront = (week, padWith = null) => {
  return [...Array(7 - week.length).fill(padWith), ...week];
};
// заполнение пустіми датами задние дни последней недели
const padWeekBack = (week, padWith = null) => {
  return [...week, ...Array(7 - week.length).fill(padWith)];
};

export const CalendarTable = ({ month, year, onClick }) => {
  //currentMonthMoment  текущий или переданный месяц года
  const currentMonthMoment = moment(`${month}${year}}`, 'MMYYYY');
  //  weeks - массив количества недель и сколько дней в каждой неделе
  const weeks = segmentIntoWeeks(getDaysInMonth(currentMonthMoment));
  // номер текущего дня
  const currentDayNumber = moment().format('D');

  // оновлюємо список тасків щоразу коли міняється місяць
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(tasksOperations.fetchAllTasks({ month, year }));
  }, [dispatch, month, year]);

  // витягаємо нові таски для нового рендерингу
  const tasks = useSelector(state => state.tasks.items);
  console.log('tasks', tasks);

  return (
    <>
      <CalendarTableDiv>
        <tbody>
          {/*цикл  недели */}
          {weeks.map((week, i) => {
            const displayWeek =
              i === 0
                ? padWeekFront(week)
                : i === weeks.length - 1
                ? padWeekBack(week)
                : week;
            // возвращаем дни
            return (
              <CalendarRow key={i}>
                {displayWeek.map((dayMoment, j) =>
                  dayMoment ? (
                    <CalenderCell
                      key={dayMoment.format('D')}
                      onClick={() => onClick(dayMoment.format('MM.DD.YYYY'))}
                    >
                      <NumberDay
                        currentDayNumber={currentDayNumber}
                        dayMoment={dayMoment.format('D')}
                      >
                        {dayMoment.format('D')}
                      </NumberDay>
                      {/* ОТУТ ПОЧАТОК ВЕРСТКИ ТАСОК В КАЛЕНДАР */}

                      {tasks.map(
                        currentTask =>
                          currentTask.date ===
                            dayMoment.format('YYYY-MM-DD') && (
                            <OneTaskInTable
                              type={currentTask.priority}
                              key={currentTask._id}
                            >
                              {currentTask.title}
                            </OneTaskInTable>
                          )
                      )}
                      {/* ОТУТ КІНЕЦЬ ВЕРСТКИ ТАСОК В КАЛЕНДАР */}
                    </CalenderCell>
                  ) : (
                    <CalenderCell key={`${i}${j}`}></CalenderCell>
                  )
                )}
              </CalendarRow>
            );
          })}
        </tbody>
      </CalendarTableDiv>
    </>
  );
};
//
