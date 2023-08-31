import React from 'react';
import RulerDays from 'components/Calendar/RulerDays/RulerDays';

export const DayCalendarHead = ({ period }) => {
  return (
    <div>
      <RulerDays period={period} />
    </div>
  );
};

//  - DayCalendarHead - дні тижня з датами, клік по дню з датою показує колонки з задачами за обраний день.
