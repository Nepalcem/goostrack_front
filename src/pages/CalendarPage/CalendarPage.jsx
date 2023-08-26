import React, { useState } from 'react';
import CalendarToolbar from 'components/Calendar/CalendarToolbar/CalendarToolbar/CalendarToolbar';
import RulerDays from 'components/Calendar/RulerDays/RulerDays';
//import { Button } from 'components/Button/Button';

const CalendarPage = () => {
  const [period, setPeriod] = useState('month'); // выбор периода отображения "month" or "day"
  const [numberMonday, setNumberMonday] = useState(3);

  // this.state = {
  //   period: 'month',
  //   numberMonday: 3,
  // };

  // const updateData = (period, numberMonday) => {
  //   this.setState({ period: period, numberMonday: numberMonday });
  // };
  return (
    <div>
      <CalendarToolbar />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        {/* <Button textButton={'Month'} onClick={() => console.log('press')} />
        <Button textButton={'Day'} onClick={() => console.log('press')} /> */}
        {/* <button onClick={() => setPeriod('month')}>MONTH</button>
      <button onClick={() => setPeriod('day')}>DAY</button> */}
        <button
          onClick={() => {
            setPeriod('month');
            //this.props.updateData(period);
          }}
        >
          MONTH
        </button>
        <button
          onClick={() => {
            setPeriod('day');
            //   this.props.updateData(numberMonday);
          }}
        >
          DAY
        </button>
        {/* { this.props.updateData(this.state.name)} */}
      </div>

      <RulerDays
        // period={this.state.period}
        // numberMonday={this.state.numberMonday}
        period={period}
        numberMonday={numberMonday}
      />
    </div>
  );
};

export default CalendarPage;

// setPeriod('month');setPeriod('day')
