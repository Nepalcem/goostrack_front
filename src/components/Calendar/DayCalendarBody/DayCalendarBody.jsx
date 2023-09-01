import React from 'react';
import {
  MainTasksContainer,
  TaskBlock,
  TaskBlockTitle,
  TasksWrap,
} from './DayCalendarBody.styled';

import DayTask from '../DayTask/DayTask';

const DayCalendarBody = ({ tasksPerDay }) => {
  console.log('tasksPerDay', tasksPerDay);

  return (
    <MainTasksContainer>
      <TaskBlock>
        <TaskBlockTitle>To do</TaskBlockTitle>
        <TasksWrap>
          <DayTask currentTask={tasksPerDay[2]} />
        </TasksWrap>
      </TaskBlock>

      <TaskBlock>
        <TaskBlockTitle>In progress</TaskBlockTitle>
      </TaskBlock>

      <TaskBlock>
        <TaskBlockTitle>Done</TaskBlockTitle>
      </TaskBlock>
    </MainTasksContainer>
  );
};

export default DayCalendarBody;
