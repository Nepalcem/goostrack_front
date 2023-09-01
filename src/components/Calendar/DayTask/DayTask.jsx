import React from 'react';
import { TaskContainer, AvaThumb, Ava, Priority } from './DayTask.styled';

const DayTask = ({ currentTask }) => {
  console.log('currentTask', currentTask);
  return (
    <TaskContainer>
      <p>{currentTask.description}</p>
      <AvaThumb>
        <Ava />
      </AvaThumb>
      <Priority type={currentTask.priority}>{currentTask.priority}</Priority>
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
    </TaskContainer>
  );
};

export default DayTask;
