import { fetchReviewByOwner } from 'redux/reviews/reviewsOperation';
import { FeedbackButtonStyle, FeedbackWrapper } from './FeedbackButton.styled';
import { useDispatch } from 'react-redux';
import ModalFeedback from './FormFeedback/ModalFeedback';
import { useState } from 'react';

const FeedbackButton = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = async () => {
    await dispatch(fetchReviewByOwner());
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <FeedbackButtonStyle type="button" onClick={handleButtonClick}>
        Feedback
      </FeedbackButtonStyle>
      <FeedbackWrapper>
        {isModalOpen && (
          <ModalFeedback onClose={handleCloseModal}></ModalFeedback>
        )}
      </FeedbackWrapper>
    </>
  );
};
export default FeedbackButton;
