import React, { useState } from 'react';
import { fetchReviewByOwner } from '../../../redux/reviews/reviewsOperation';
import { useDispatch } from 'react-redux';
import { Button } from './ButtonFeedback.styled';
import AddFeedbackModal from '../../AddFeedback/AddFeedbackModal';

const ButtonFeedback = () => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleClick = async () => {
    
    await dispatch(fetchReviewByOwner());
    toggleModal();
  };

  return (
    <>
      <Button type="button" onClick={handleClick}>
        Feedback
      </Button>
      {showModal && <AddFeedbackModal toggleModal={toggleModal}/>}
    </>
  );
};

export default ButtonFeedback;
