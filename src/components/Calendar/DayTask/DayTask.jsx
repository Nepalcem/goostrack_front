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
  PopBtn,
  PopBtnWraper,
  PopText,
  PopIco,
} from './DayTask.styled';

import IcoChangeStatus from '../../../images/svg/arrow-circle.svg';
import IcoEditTast from '../../../images/svg/pencil.svg';
import IcoDeleteTast from '../../../images/svg/trash.svg';

import ProfileAva from '../../../images/user-avatar.png';
import { useDispatch, useSelector } from 'react-redux';

import { deleteTask, updateTask } from 'redux/tasks/tasksOperation';

import TaskModal from '../TaskModal/TaskModal';

const body = document.querySelector('body');

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
  };

  const handleToggle = () => {
    setModalAddTaskIsOpened(prevState => !prevState);
    if (modalAddTaskIsOpened === true) {
      body.style.overflow = 'scroll';
    }
    if (modalAddTaskIsOpened === false) {
      body.style.overflow = 'hidden';
    }
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
            // anchorReference="anchorPosition"
            // anchorPosition={{ top: 462, left: 420 }}
          >
            <WrapperPopover >
              {currentTask.category !== 'to-do' && (
                <PopBtn onClick={() => clickToRelocate('to-do')}>
                  <PopBtnWraper>
                    <PopText>To do</PopText> <PopIco src={IcoChangeStatus} />
                  </PopBtnWraper>
                </PopBtn>
              )}
              {currentTask.category !== 'in-progress' && (
                <PopBtn onClick={() => clickToRelocate('in-progress')}>
                  <PopBtnWraper>
                    <PopText>In Progress</PopText>{' '}
                    <PopIco src={IcoChangeStatus} />
                  </PopBtnWraper>
                </PopBtn>
              )}
              {currentTask.category !== 'done' && (
                <PopBtn onClick={() => clickToRelocate('done')}>
                  <PopBtnWraper>
                    <PopText>Done</PopText> <PopIco src={IcoChangeStatus} />
                  </PopBtnWraper>
                </PopBtn>
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
