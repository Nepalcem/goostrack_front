import { GrClose } from 'react-icons/gr';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay } from './Overlay.styled';
import WindowModal from 'components/FeedbackModal/WindowModal/WindowModal';
import { CloseModalButton } from './AddFeedbackModal.styled';
import FeedbackForm from './FeedbackForm';
const feedbackModalRoot = document.querySelector('#modal-root');

const AddFeedbackModal = ({ toggleModal }) => {

 useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleModal]);

  const handleOverlay = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return createPortal(
      <Overlay onClick={handleOverlay}>
        <WindowModal>
          <CloseModalButton type="button" onClick={toggleModal}>
            <GrClose size={20} />
          </CloseModalButton>
          <FeedbackForm toggleModal={toggleModal} />
        </WindowModal>
      </Overlay>,

    feedbackModalRoot
  );
};

export default AddFeedbackModal;
