import React, { useState, useEffect } from 'react';
import { addMonths, getTime, addDays, format } from 'date-fns';

import { useNavigate } from 'react-router-dom';

import PeriodPaginator from '../PeriodPaginator/PeriodPaginator';
import PeriodTypeSelect from '../PeriodTypeSelect/PeriodTypeSelect';

import { CalendarToolbarDiv } from './CalendarToolbar.styled';

const CalendarToolbar = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState(getTime(new Date())); //за промовчанням поточна дата
  const [period, setPeriod] = useState('month'); //за промовчанням period month
  // форматируем текущую дату из стейта для URL
  const CurrentDate = format(date, 'MM yyyy').split(' ').join('');
  const CurrentDay = format(date, 'dd MM yyyy').split(' ').join('');
  // меняем URL взависимости от периода и даті
  useEffect(() => {
    if (period === 'month') {
      navigate(`/calendar/month/${CurrentDate}`);
    } else {
      navigate(`/calendar/day/${CurrentDay}`);
    }
  }, [navigate, CurrentDate, date, period]);

  //функція зміни місяця вперед чи назад
  const onChangeMonthOrDay = (step, period) => {
    let newDate = null;
    if (period === 'month') {
      newDate = addMonths(date, step); //змінюємо місяць у будь-який бік
    }
    if (period === 'day') {
      newDate = addDays(date, step); //змінюємо дату у будь-який бік
    }

    const millisec = getTime(newDate); //переводимо в millisec для форматування та запису в стейт
    setDate(millisec); //пишем в стейт
  };

  // функция выбора периода month or day
  const onChangePeriod = newPeriod => setPeriod(newPeriod);

  return (
    <CalendarToolbarDiv>
      <PeriodPaginator
        date={date}
        period={period}
        onClick={onChangeMonthOrDay}
      />
      <PeriodTypeSelect onClick={onChangePeriod} />
    </CalendarToolbarDiv>
  );
};
export default CalendarToolbar;
// "1. Компонент рендерить:
//  - PeriodPaginator - дозволяє юзеру змінити дату періоду, задачі за який він хоче подивитись.
//  - PeriodTypeSelect - дозволяє юзеру змінити тип періоду, задачі за який він хоче подивитись.
// 2. Компонент отримує тип періоду, та має локальний стейт з датою.
// При зміні дати або типу періоду відбуваеться запит на отримання задач за обраний період, якщо задач з даного періоду досі немає в глобальному стейті.
// Успіх - дані пишуться в глобальний стейт
// Помилка - виводиться відповідне пуш повідомлення."
