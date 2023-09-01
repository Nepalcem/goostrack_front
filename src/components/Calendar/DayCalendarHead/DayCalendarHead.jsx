import React from 'react';

import {
  DayComponent,
  NameDaysComponent,
  DayNumber,
} from './DayCalendarHead.styled';

const DayCalendarHead = ({ period, numberMonday }) => {
  const nameDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  let numberDay = numberMonday;
  return (
    <NameDaysComponent>
      {nameDays.map((nameDay, index) => (
        <DayComponent key={index} nameDay={nameDay}>
          {nameDay}
          <DayNumber>{index}</DayNumber>
        </DayComponent>
      ))}
    </NameDaysComponent>
  );
};
//

export default DayCalendarHead;
