import React from 'react';
import { StatisticsSectionContainer } from './StatisticsSection.styled';
import PeriodPaginatorStatistics from './PaginatorStatistics/PaginatorStatistics';
import { StatisticsChart } from './StatisticsChart/StatisticsChart';

const StatisticsSection = () => {
  return (
    <StatisticsSectionContainer>
      <PeriodPaginatorStatistics />
      <StatisticsChart />
    </StatisticsSectionContainer>
  );
};

export default StatisticsSection;
