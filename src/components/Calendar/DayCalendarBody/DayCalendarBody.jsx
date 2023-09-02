import React from 'react';
import {
  MainTasksContainer,
  TaskBlock,
  TaskBlockTitle,
  Title,
  AddTaskButton,
  TasksWrap,
} from './DayCalendarBody.styled';

import DayTask from '../DayTask/DayTask';

import IcoAddTask from '../../../images/svg/plus.svg';
import { ReactSVG } from 'react-svg';

const DayCalendarBody = ({ tasksPerDay }) => {
  console.log('tasksPerDay', tasksPerDay);

  return (
    <MainTasksContainer>
      <TaskBlock>
        <TaskBlockTitle>
          <Title>To do</Title>
          <AddTaskButton>
            <ReactSVG src={IcoAddTask} />
          </AddTaskButton>
        </TaskBlockTitle>
        <TasksWrap>
          <DayTask currentTask={tasksPerDay[0]} />
          <DayTask currentTask={tasksPerDay[1]} />
          <DayTask currentTask={tasksPerDay[2]} />
        </TasksWrap>
      </TaskBlock>

      <TaskBlock>
        <TaskBlockTitle>
          <Title>In progress</Title>
          <AddTaskButton>
            <ReactSVG src={IcoAddTask} />
          </AddTaskButton>
        </TaskBlockTitle>
      </TaskBlock>

      <TaskBlock>
        <TaskBlockTitle>
          <Title>Done</Title>
          <AddTaskButton>
            <ReactSVG src={IcoAddTask} />
          </AddTaskButton>
        </TaskBlockTitle>
      </TaskBlock>
    </MainTasksContainer>
  );
};

export default DayCalendarBody;
