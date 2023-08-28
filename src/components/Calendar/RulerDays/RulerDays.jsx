import React from 'react';

import { DayComponent, NameDaysComponent, DayNumber } from './RulesDays.styled';

const RulerDays = ({ period, numberMonday }) => {
  const nameDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  let numberDay = numberMonday;
  return (
    <NameDaysComponent>
      {nameDays.map((nameDay, index) => (
        <DayComponent period={period} nameDay={nameDay}>
          {nameDay}
          {period === 'day' && <DayNumber>{numberDay + index}</DayNumber>}
        </DayComponent>
      ))}
    </NameDaysComponent>
  );
};
//

export default RulerDays;
