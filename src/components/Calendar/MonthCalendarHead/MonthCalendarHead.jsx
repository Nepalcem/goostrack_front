import { DayComponent, NameDaysComponent } from './MonthCalendarHead.styled';
import { useResize } from 'hooks/useResize';

import { SCREEN_TABLET, nameDaysMobile, nameDaysTablet } from 'utils/variables';

export const MonthCalendarHead = () => {
  const nameDays =
    useResize().width < SCREEN_TABLET ? nameDaysMobile : nameDaysTablet;
  return (
    <NameDaysComponent>
      {nameDays.map((nameDay, index) => (
        <DayComponent key={index} index={index}>
          {nameDay}
        </DayComponent>
      ))}
    </NameDaysComponent>
  );
};
//
