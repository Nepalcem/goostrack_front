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
  PopoverStyled,
  WrapperPopover,
} from './DayTask.styled';

import IcoChangeStatus from '../../../images/svg/arrow-circle.svg';
import IcoEditTast from '../../../images/svg/pencil.svg';
import IcoDeleteTast from '../../../images/svg/trash.svg';

import ProfileAva from '../../../images/user-avatar.png';
import { useDispatch, useSelector } from 'react-redux';

import { deleteTask, updateTask } from 'redux/tasks/tasksOperation';

import TaskModal from '../TaskModal/TaskModal';

const DayTask = ({ currentTask }) => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const [modalAddTaskIsOpened, setModalAddTaskIsOpened] = useState(false);
  const [idForEdit, setIdForEdit] = useState('');
  const [anchor, setAnchor] = useState(null);
  const handleClick = e => {
    setAnchor(e.currentTarget);
  };

  const clickToRelocate = category => {
    const updatedTask = {
      title: currentTask.title,
      start: currentTask.start,
      end: currentTask.end,
      date: currentTask.date,
      priority: currentTask.priority,
      category: category,
    };
    dispatch(updateTask({ id: currentTask._id, updatedTask }));
    console.log('upd');
  };

  const handleToggle = () => {
    setModalAddTaskIsOpened(prevState => !prevState);
  };
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
            <Ava
              src={user.avatar || user.avatarURL || ProfileAva}
              alt="profile ava"
            />
          </AvaThumb>
          <Priority type={currentTask.priority}>
            {currentTask.priority}
          </Priority>
        </InfoBlock>
        <ButtonsBlock>
          <ButtonController type="button" onClick={handleClick}>
            <ButtonIco src={IcoChangeStatus} />
          </ButtonController>
          <PopoverStyled
            open={Boolean(anchor)}
            anchorEl={anchor}
            onClose={() => setAnchor(null)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <WrapperPopover>
              {currentTask.category !== 'to-do' && (
                <button onClick={() => clickToRelocate('to-do')}>
                  <div>
                    <p>To do</p> <ButtonIco src={IcoChangeStatus} />
                  </div>
                </button>
              )}
              {currentTask.category !== 'in-progress' && (
                <button onClick={() => clickToRelocate('in-progress')}>
                  <div>
                    <p>In Progress</p> <ButtonIco src={IcoChangeStatus} />
                  </div>
                </button>
              )}
              {currentTask.category !== 'done' && (
                <button onClick={() => clickToRelocate('done')}>
                  <div>
                    <p>Done</p> <ButtonIco src={IcoChangeStatus} />
                  </div>
                </button>
              )}
            </WrapperPopover>
          </PopoverStyled>

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
            onClick={() => dispatch(deleteTask(currentTask._id))}
          >
            <ButtonIco src={IcoDeleteTast} />
          </ButtonController>
        </ButtonsBlock>
      </OptionsBlock>
    </TaskContainer>
  );
};

export default DayTask;
