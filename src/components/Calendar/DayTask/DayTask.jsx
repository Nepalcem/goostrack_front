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
} from './DayTask.styled';

import IcoChangeStatus from '../../../images/svg/arrow-circle.svg';
import IcoEditTast from '../../../images/svg/pencil.svg';
import IcoDeleteTast from '../../../images/svg/trash.svg';
import { ReactSVG } from 'react-svg';
import ProfileAva from '../../../images/user-avatar.png';

const DayTask = ({ currentTask }) => {
  console.log('currentTask', currentTask);
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
            <ReactSVG src={IcoChangeStatus} />
          </ButtonController>

          <ButtonController type="button">
            <ReactSVG src={IcoEditTast} />
          </ButtonController>

          <ButtonController type="button">
            <ReactSVG src={IcoDeleteTast} />
          </ButtonController>
        </ButtonsBlock>
      </OptionsBlock>
    </TaskContainer>
  );
};

export default DayTask;
