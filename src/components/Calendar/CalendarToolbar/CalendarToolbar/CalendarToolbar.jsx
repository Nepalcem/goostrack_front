import React, { useState } from 'react';
import {
  addMonths,
  add,
  format,
  getDate,
  getTime,
  getMilliseconds,
  milliseconds,
} from 'date-fns';
import {
  startOfMonth,
  endOfMonth,
  endOfWeek,
  eachDayOfInterval,
  startOfWeek,
} from 'date-fns';

const CalendarToolbar = () => {
  const [date, setDate] = useState(getTime(new Date())); //за промовчанням поточна дата
  //функція зміни місяця вперед чи назад
  const onChangeMonth = step => {
    const newMonth = addMonths(date, step); //змінюємо місяць у будь-який бік
    const millisec = getTime(newMonth); //переводимо в millisec для форматування та запису в стейт
    setDate(millisec); //пишем в стейт
  };

  return (
    <div>
      <div>{format(date, 'MMMM yyyy')}</div>
      <button onClick={() => onChangeMonth(-1)}>back</button>
      <button onClick={() => onChangeMonth(1)}>forvard</button>
    </div>
    // <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
    //   {/* <Button textButton={'Month'} onClick={() => console.log('press')} />
    //     <Button textButton={'Day'} onClick={() => console.log('press')} /> */}
    //   {/* <button onClick={() => setPeriod('month')}>MONTH</button>
    //   <button onClick={() => setPeriod('day')}>DAY</button> */}
    //   <button
    //     onClick={() => {
    //       setPeriod('month');
    //       this.props.updateData(period);
    //     }}
    //   >
    //     MONTH
    //   </button>
    //   <button
    //     onClick={() => {
    //       setPeriod('day');
    //       this.props.updateData(numberMonday);
    //     }}
    //   >
    //     DAY
    //   </button>
    //   {/* { this.props.updateData(this.state.name)} */}
    // </div>
  );
};
export default CalendarToolbar;
