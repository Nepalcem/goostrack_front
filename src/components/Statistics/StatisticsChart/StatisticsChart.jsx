import React from 'react';
import { useEffect, useState } from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
import { ChartContainer } from './StatisticsChart.styled';
import { fetchAllTasks } from 'redux/tasks/tasksOperation';
import { useDispatch, useSelector } from 'react-redux';
import { selectTasks } from 'redux/tasks/tasksSelectors';

// const data = [
//   { name: 'To Do', ByDay: 50, ByMonth: 50 },
//   { name: 'In Progress', ByDay: 100, ByMonth: 24 },
//   { name: 'Done', ByDay: 35, ByMonth: 24 },
// ];
let data = [];

const customBarLabel = ({ x, y, width, value }) => {
  return (
    <text
      x={x + width / 2}
      y={y}
      fill="var(--color-calendar-day)"
      fontWeight="400"
      textAnchor="middle"
      dy={-5}
      style={{ fontSize: window.innerWidth >= 768 ? 14 : 10 }}
    >{`${value}%`}</text>
  );
};

export const StatisticsChart = () => {
  const [chartWidth, setChartWidth] = useState(0);
  const [chartHeight, setChartHeight] = useState(0);
  const [chartBarSize, setChartBarSize] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllTasks({ year: '2023', month: '09', day: '04' }));
  }, [dispatch]);
  const tasksByMonth = useSelector(selectTasks);
  console.log('bymnt', tasksByMonth);
  ////////////////////////////////////////////////
  let mToDo = 0;
  let mInP = 0;
  let mDone = 0;
  for (let item of tasksByMonth) {
    if (item.category === 'to-do') {
      mToDo += 1;
    }
    if (item.category === 'in-progress') {
      mInP += 1;
    }
    if (item.category === 'done') {
      mDone += 1;
    }
  }
  let allCountByM = tasksByMonth.length;

  console.log(mDone);
  console.log(mInP);
  console.log(mToDo);

  data = [
    {
      name: 'To Do',
      ByDay: 50,
      ByMonth: 30,
    },
    {
      name: 'In Progress',
      ByDay: 100,
      ByMonth: 20,
    },
    { name: 'Done', ByDay: 35, ByMonth: 11 },
  ];
  console.log(data);

  ///////////////////////////////////////////
  const date = '2023-09-04'; // умовна дата
  const tasksByDay = tasksByMonth.filter(item => item.date === date);
  console.log('byday', tasksByDay);

  const calculatePercentage = (data, category, type) => {
    const filteredData = data.filter(item => item.category === category);
    const totalTasks = filteredData.length;
    // console.log(totalTasks);
    const sumValue = filteredData.reduce((total, item) => {
      return total + parseFloat(item[type]);
    }, 0);
    const percentage =
      totalTasks === 0 ? 0 : (sumValue / (totalTasks * 100)) * 100;
    // console.log(percentage);
    return percentage;
  };

  // if (tasksByMonth || tasksByDay) {
  //   data.push({
  //     name: 'To Do',
  //     ByDay: calculatePercentage(tasksByDay, 'to-do', 'ByDay'),
  //     ByMonth: calculatePercentage(tasksByMonth, 'to-do', 'ByMonth'),
  //   });
  //   data.push({
  //     name: 'In Progress',
  //     ByDay: calculatePercentage(tasksByDay, 'in-progress', 'ByDay'),
  //     ByMonth: calculatePercentage(tasksByMonth, 'in-progress', 'ByMonth'),
  //   });
  //   data.push({
  //     name: 'Done',
  //     ByDay: calculatePercentage(tasksByDay, 'done', 'ByDay'),
  //     ByMonth: calculatePercentage(tasksByMonth, 'done', 'ByMonth'),
  //   });
  //   console.log(data);
  // }

  useEffect(() => {
    const handleResize = () => {
      let newSize = 279;
      let newHeight = 328;
      let newBarSize = 22;

      if (window.innerWidth >= 1440) {
        newSize = 780;
        newHeight = 351;
        newBarSize = 27;
      } else if (window.innerWidth >= 768) {
        newSize = 576;
        newHeight = 328;
        newBarSize = 22;
      }

      setChartWidth(newSize);
      setChartHeight(newHeight);
      setChartBarSize(newBarSize);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <ChartContainer>
      <BarChart
        width={chartWidth}
        height={chartHeight}
        data={data}
        margin={{ top: 45, right: 0, bottom: 5, left: -15 }}
        barGap="7%"
      >
        <CartesianGrid
          stroke="var(--color-border-stat-line)"
          vertical={false}
        />
        {/* <CartesianGrid stroke="rgba(227, 243, 255, 1)" vertical={false} /> */}
        <Bar
          dataKey="ByDay"
          fill="url(#pinkGradientFill)"
          label={customBarLabel}
          barSize={chartBarSize}
          radius={7}
        />
        <Bar
          dataKey="ByMonth"
          fill="url(#blueGradientFill)"
          label={customBarLabel}
          barSize={chartBarSize}
          radius={7}
        />
        <defs>
          <linearGradient
            id="pinkGradientFill"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgba(255, 210, 221, 0)" />
            <stop offset="100%" stopColor="rgba(255, 210, 221, 1)" />
          </linearGradient>
          <linearGradient
            id="blueGradientFill"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgba(62, 133, 243, 0)" />
            <stop offset="100%" stopColor="rgba(62, 133, 243, 1)" />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="name"
          axisLine={{ stroke: 'transparent' }}
          tickMargin={20}
          tickSize={0}
          tick={{
            fontSize: window.innerWidth >= 768 ? 14 : 12,
            fontWeight: '500',
            fill: 'var(--color-calendar-day)',
          }}
        />
        <YAxis
          label={{
            value: 'Tasks',
            position: 'top',
            dx: 4,
            dy: -30,
            style: {
              fontSize: '14px',
              fontWeight: '700',
              fill: 'var(--color-calendar-day)',
              // fill: '#343434',
            },
          }}
          domain={[0, 100]}
          ticks={[0, 20, 40, 60, 80, 100]}
          axisLine={{ stroke: 'transparent' }}
          tickMargin={20}
          tickSize={0}
          tick={{
            fontSize: 14,
            fontWeight: '500',
            fill: 'var(--color-calendar-day)',
          }}
        />
      </BarChart>
    </ChartContainer>
  );
};
