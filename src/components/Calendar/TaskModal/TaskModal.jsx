import React from 'react';

import {
  Backdrop,
  ModalContainer,
  CloseButton,
  CloseButtonIco,
} from './TaskModal.style';

import CloseIco from '../../../images/svg/x-close.svg';

// портал
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');

const TaskModal = ({ handleToggle }) => {
  return createPortal(
    <Backdrop>
      <ModalContainer>
        <CloseButton onClick={handleToggle}>
          <CloseButtonIco src={CloseIco} alt="close menu" width="100%" />
        </CloseButton>
      </ModalContainer>
    </Backdrop>,
    modalRoot
  );
};

export default TaskModal;
