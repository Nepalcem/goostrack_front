import { DayComponent, NameDaysComponent } from './MonthCalendarHead.styled';

export const MonthCalendarHead = ({ numberMonday }) => {
  const nameDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  return (
    <NameDaysComponent>
      {nameDays.map((nameDay, index) => (
        <DayComponent index={index}>{nameDay}</DayComponent>
      ))}
    </NameDaysComponent>
  );
};
//
