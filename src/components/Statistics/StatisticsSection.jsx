import React, { useEffect } from 'react';
import { StatisticsSectionContainer } from './StatisticsSection.styled';
import PeriodPaginatorStatistics from './PaginatorStatistics/PaginatorStatistics';
import { StatisticsChart } from './StatisticsChart/StatisticsChart';
import { useDispatch } from 'react-redux';
import { editTitle } from 'redux/title/titleSlice';

const StatisticsSection = () => {
  // Текст заголовку цієї сторінки
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(editTitle('Statistics'));
  });

  return (
    <StatisticsSectionContainer>
      <PeriodPaginatorStatistics />
      <StatisticsChart />
    </StatisticsSectionContainer>
  );
};

export default StatisticsSection;
