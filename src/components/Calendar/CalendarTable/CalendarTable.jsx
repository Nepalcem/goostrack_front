import React from 'react';
import moment from 'moment';

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

export const CalendarTable = ({ month, year }) => {
  // console.log(month, year);
  //currentMonthMoment  текущий или переданный месяц года
  const currentMonthMoment = moment(`${month}${year}}`, 'MMYYYY');
  //  weeks - массив количества недель и сколько дней в каждой неделе
  const weeks = segmentIntoWeeks(getDaysInMonth(currentMonthMoment));

  return (
    <>
      <table>
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
              <tr key={i}>
                {displayWeek.map((dayMoment, j) =>
                  dayMoment ? (
                    <td key={dayMoment.format('D')}>{dayMoment.format('D')}</td>
                  ) : (
                    <td key={`${i}${j}`}></td>
                  )
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
