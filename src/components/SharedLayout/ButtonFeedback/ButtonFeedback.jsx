import React, { useState, useEffect } from 'react';
import { fetchReviewByOwner } from '../../../redux/reviews/reviewsOperation';
import { useDispatch } from 'react-redux';
import { Button } from './ButtonFeedback.styled';
import AddFeedbackModal from '../../AddFeedback/AddFeedbackModal';

const ButtonFeedback = () => {
  const [showModal, setShowModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const dispatch = useDispatch();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (showModal) {
      setIsModalOpen(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsModalOpen(false);
      document.body.style.overflow = 'auto';
    }
  }, [showModal]);

  const handleClick = async () => {
    toggleModal();
    dispatch(fetchReviewByOwner());

  };

  return (
    <>
      <Button type="button" onClick={handleClick}>
        Feedback
      </Button>
      {isModalOpen && <AddFeedbackModal toggleModal={toggleModal} />}
    </>
  );
};

export default ButtonFeedback;
