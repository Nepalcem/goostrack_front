import React from 'react';

// стилізовані компоненти
import {
  MainTasksContainer,
  TaskBlock,
  TaskBlockTitle,
  Title,
  AddTaskButton,
  IcoAdd,
  TasksWrap,
  AddTaskButtonBig,
  IcoAdd2,
} from './TasksColumnsList.styled';

// компонент однієї таски
import DayTask from '../DayTask/DayTask';

// іконки
import IcoAddTask from '../../../images/svg/plus.svg';
import IcoAddTask2 from '../../../images/svg/plus2.svg';

const TasksColumnsList = ({ tasksPerDay }) => {
  // console.log('tasksPerDay', tasksPerDay);

  return (
    <MainTasksContainer>
      <TaskBlock>
        <TaskBlockTitle>
          <Title>To do</Title>
          <AddTaskButton>
            <IcoAdd src={IcoAddTask} />
          </AddTaskButton>
        </TaskBlockTitle>
        <TasksWrap>
          {tasksPerDay.map(cuurentTast => {
            return (
              cuurentTast.category === 'to-do' && (
                <DayTask key={cuurentTast._id.$oid} currentTask={cuurentTast} />
              )
            );
          })}
        </TasksWrap>
        <AddTaskButtonBig>
          <IcoAdd2 src={IcoAddTask2} />
          Add task
        </AddTaskButtonBig>
      </TaskBlock>

      <TaskBlock>
        <TaskBlockTitle>
          <Title>In progress</Title>
          <AddTaskButton>
            <IcoAdd src={IcoAddTask} />
          </AddTaskButton>
        </TaskBlockTitle>
        <TasksWrap>
          {tasksPerDay.map(cuurentTast => {
            return (
              cuurentTast.category === 'in-progress' && (
                <DayTask key={cuurentTast._id.$oid} currentTask={cuurentTast} />
              )
            );
          })}
        </TasksWrap>
        <AddTaskButtonBig>
          <IcoAdd2 src={IcoAddTask2} />
          Add task
        </AddTaskButtonBig>
      </TaskBlock>

      <TaskBlock>
        <TaskBlockTitle>
          <Title>Done</Title>
          <AddTaskButton>
            <IcoAdd src={IcoAddTask} />
          </AddTaskButton>
        </TaskBlockTitle>
        <TasksWrap>
          {tasksPerDay.map(cuurentTast => {
            return (
              cuurentTast.category === 'done' && (
                <DayTask key={cuurentTast._id.$oid} currentTask={cuurentTast} />
              )
            );
          })}
        </TasksWrap>
        <AddTaskButtonBig>
          <IcoAdd2 src={IcoAddTask2} />
          Add task
        </AddTaskButtonBig>
      </TaskBlock>
    </MainTasksContainer>
  );
};

export default TasksColumnsList;
