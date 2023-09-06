import Modal from 'components/modal/Modal';
import FormFeedback from './FormFeedback';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { selectOwnerReviews } from '../../../../redux/reviews/reviewsSelectors';

const ModalFeedback = ({ onClose }) => {
  const [review, setReview] = useState('');
  const reviewOwn = useSelector(selectOwnerReviews);
  
  useEffect(() => {
    setReview(reviewOwn);
  }, [reviewOwn]);
  return (
    <Modal onClose={onClose}>
      <FormFeedback onClose={onClose} reviewOwn={review} />
    </Modal>
  );
};
export default ModalFeedback;
