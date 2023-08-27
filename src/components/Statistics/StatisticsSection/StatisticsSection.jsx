import { useState } from 'react';
import { format } from 'date-fns';
import { BsFillCircleFill } from 'react-icons/bs';

import { PeriodPaginatorStatistics } from '../PeriodPaginatorStatistics/PeriodPaginatorStatistics';
// import { StatisticsCalendar } from '../StatisticsCalendar/StatisticsCalendar';
// import { StatisticsChart } from '../StatisticsChart/StatisticsChart';

import {
  HeadContainer,
  PeriodTime,
  Period,
  ChartContainer,
  StatisticsWrapper,
  PaginationWrapper,
} from './StatisticsSection.styled';

const StatisticsSection = () => {
  const [date, setDate] = useState(() => {
    return format(new Date(), 'yyyy-MM-dd');
  });

  return (
    <StatisticsWrapper>
      <HeadContainer>
        <PaginationWrapper>
          <PeriodPaginatorStatistics
            type={'day'}
            normalizedDate={date}
            setDate={setDate}
          />
          {/* <StatisticsCalendar selectedDate={date} setDate={setDate} /> */}
        </PaginationWrapper>
        <PeriodTime>
          <Period>
            <BsFillCircleFill fill="#FFD2DD" size={8} /> By Day
          </Period>
          <Period>
            <BsFillCircleFill fill="#3E85F3" size={8} /> By Month
          </Period>
        </PeriodTime>
      </HeadContainer>
      <ChartContainer>
        {/* <StatisticsChart normalizedDate={date} /> */}
      </ChartContainer>
    </StatisticsWrapper>
  );
};

export default StatisticsSection;
