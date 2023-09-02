import React from 'react';
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

const DayTask = ({ currentTask }) => {
  // console.log('currentTask', currentTask);
  return (
    <TaskContainer>
      <Description>{currentTask.description}</Description>
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

          <ButtonController type="button">
            <ButtonIco src={IcoEditTast} />
          </ButtonController>

          <ButtonController type="button">
            <ButtonIco src={IcoDeleteTast} />
          </ButtonController>
        </ButtonsBlock>
      </OptionsBlock>
    </TaskContainer>
  );
};

export default DayTask;
