import { useState } from 'react';
import Modal from 'components/modal/Modal';
import { FeedbackButtonStyle, FeedbackWrapper } from './FeedbackButton.styled';
import ModalRating from './ModalRating/ModalRating';
import ModalReview from './ModalReview/ModalReviews';
import ModalButton from './ModalButton/ModalButton';

const FeedbackButton = () => {
  const handleToggle = () => setIsOpenModal(pS => !pS);
  const [isModalOpen, setIsOpenModal] = useState(false);
  return (
    <>
      <FeedbackButtonStyle type="button" onClick={handleToggle}>
        Feedback
      </FeedbackButtonStyle>
      <FeedbackWrapper>
        <Modal onClose={handleToggle} isOpen={isModalOpen}>
          <ModalRating />
          <ModalReview />
          <ModalButton />
        </Modal>
      </FeedbackWrapper>
    </>
  );
};
export default FeedbackButton;
