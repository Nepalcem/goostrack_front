import React, { useState } from 'react';
import {
  TaskContainer,
  Description,
  AvaThumb,
  Ava,
  Priority,
  OptionsBlock,
  InfoBlock,
  ButtonsBlock,
  ButtonController,
  ButtonIco,
} from './DayTask.styled';

import IcoChangeStatus from '../../../images/svg/arrow-circle.svg';
import IcoEditTast from '../../../images/svg/pencil.svg';
import IcoDeleteTast from '../../../images/svg/trash.svg';

import ProfileAva from '../../../images/user-avatar.png';
import { useDispatch } from 'react-redux';

import tasksOperations from 'redux/tasks/tasksOperation';

import TaskModal from '../TaskModal/TaskModal';

const DayTask = ({ currentTask }) => {
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(tasksOperations.deleteTask(id));
  }

  const [modalAddTaskIsOpened, setModalAddTaskIsOpened] = useState(false);
  const [idForEdit, setIdForEdit] = useState('');

  const handleToggle = () => {
    setModalAddTaskIsOpened(prevState => !prevState);
  };

  // console.log('currentTask', currentTask);
  // console.log('handleDelete', handleDelete);
  return (
    <TaskContainer>
      {modalAddTaskIsOpened && (
        <TaskModal
          category={currentTask.category}
          handleToggle={handleToggle}
          currentDay={currentTask.date}
          operation="edit"
          idForEdit={idForEdit}
          currentTask={currentTask}
        />
      )}

      <Description>{currentTask.title}</Description>
      <OptionsBlock>
        <InfoBlock>
          <AvaThumb>
            <Ava src={ProfileAva} alt="profile ava" />
          </AvaThumb>
          <Priority type={currentTask.priority}>
            {currentTask.priority}
          </Priority>
        </InfoBlock>
        <ButtonsBlock>
          <ButtonController type="button">
            <ButtonIco src={IcoChangeStatus} />
          </ButtonController>

          <ButtonController
            type="button"
            onClick={() => {
              setIdForEdit(currentTask.id);
              handleToggle();
            }}
          >
            <ButtonIco src={IcoEditTast} />
          </ButtonController>

          <ButtonController
            type="button"
            onClick={() => handleDelete(currentTask._id)}
          >
            <ButtonIco src={IcoDeleteTast} />
          </ButtonController>
        </ButtonsBlock>
      </OptionsBlock>
    </TaskContainer>
  );
};

export default DayTask;
