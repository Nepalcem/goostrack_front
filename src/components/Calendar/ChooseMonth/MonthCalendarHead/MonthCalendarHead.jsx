import React from 'react';
import RulerDays from 'components/Calendar/RulerDays/RulerDays';

export const MonthCalendarHead = ({ period }) => {
  return (
    <div>
      <RulerDays period={period} />
    </div>
  );
};

// MonthCalendarHead - дні тижня без дат
