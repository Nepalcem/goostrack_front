import React from 'react';
import {
  ChartContainer,
  StatisticsBlockContainer,
} from './StatisticsBlock.styled';

import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  { name: 'To Do', ByDay: 50, ByMonth: 50 },
  { name: 'In Progress', ByDay: 100, ByMonth: 24 },
  { name: 'Done', ByDay: 35, ByMonth: 24 },
];

//Explanation How it works
// https://recharts.org/en-US/api/BarChart

const StatisticsBlock = () => {
  return (
    <StatisticsBlockContainer>
      Hello I am statistics
      <ChartContainer>
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="ByDay" fill="#FFD2DD" />
          <Bar dataKey="ByMonth" fill="#3E85F3" />
        </BarChart>
      </ChartContainer>
    </StatisticsBlockContainer>
  );
};

export default StatisticsBlock;
