import React, { useState, useEffect } from 'react';
import { addMonths, getTime, addDays, format } from 'date-fns';

import { useNavigate } from 'react-router-dom';

import PeriodPaginator from '../PeriodPaginator/PeriodPaginator';
import PeriodTypeSelect from '../PeriodTypeSelect/PeriodTypeSelect';

import { CalendarToolbarDiv } from './CalendarToolbar.styled';

const CalendarToolbar = ({ onClickDay }) => {
  const navigate = useNavigate();

  const [date, setDate] = useState(
    parseInt(localStorage.getItem('date')) || getTime(new Date())
  ); //за промовчанням поточна дата
  const [period, setPeriod] = useState(
    localStorage.getItem('period') || 'month'
  ); //за промовчанням period month
  //сохраняем дату и период в localStorage
  localStorage.date = date;
  localStorage.period = period;

  // форматируем текущую дату из стейта для URL
  const CurrentDate = format(date, 'yyyy-MM').split(' ').join('');
  const CurrentDay = format(date, 'yyyy-MM-dd').split(' ').join('');
  // меняем URL взависимости от периода и даті
  useEffect(() => {
    if (period === 'month') {
      navigate(`/calendar/month/${CurrentDate}`);
    } else {
      navigate(`/calendar/day/${CurrentDay}`);
    }
  }, [navigate, CurrentDate, date, period, CurrentDay]);

  // если есть выбор дня в CalendarTable - меняем стейт для перехода
  useEffect(() => {
    if (onClickDay !== null) {
      setDate(getTime(new Date(`${onClickDay}`)));
      setPeriod('day');
    }
  }, [onClickDay]);
  /////////////////////////////

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
      <PeriodTypeSelect period={period} onClick={onChangePeriod} />
    </CalendarToolbarDiv>
  );
};
export default CalendarToolbar;
