import React from 'react';
import { useResize } from 'hooks/useResize';

import { SCREEN_TABLET, nameDaysMobile, nameDaysTablet } from 'utils/variables';

import {
  DayComponent,
  NameDaysComponent,
  DayNumber,
} from './DayCalendarHead.styled';

const DayCalendarHead = () => {
  const nameDays =
    useResize().width < SCREEN_TABLET ? nameDaysMobile : nameDaysTablet;

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
