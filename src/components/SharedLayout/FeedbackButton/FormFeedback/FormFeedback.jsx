import { Formik } from 'formik';
import { object, string } from 'yup';
import '@smastrom/react-rating/style.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  addReview,
  deleteReview,
  updateReview,
} from '../../../../redux/reviews/reviewsOperation';

import {
  BtnCancel,
  BtnSaveOrEdit,
  BtnWrap,
  CancelButton,
  EditButton,
  FeedbackForm,
  FeedbackFormLabel,
  FeedbackFormStarInput,
  LabelAndButtonDiv,
  StarBtn,
  StarContainerWrap,
  TextInput,
} from './FormFeedback.styled';

let userValidSchema = object({
  rating: string().required(),
  comment: string().required(),
});
const FormFeedback = ({ reviewOwn, onClose }) => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');
  const [hover, setHover] = useState(null);
  const [editReview, setEditReview] = useState(false);
  useEffect(() => {
    if (reviewOwn === null) {
      return;
    }
    setRating(reviewOwn.rating);
    setMessage(reviewOwn.comment);
  }, [reviewOwn]);
  const reset = () => {
    setMessage('');
    setRating(0);
    setHover(null);
    setEditReview(false);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const currentMessage = message;
    if (!rating) {
      Notify.failure(
        'Sorry, the rating fild cannot be empty . Please try again.'
      );
      return;
    }
    if (message.length <= 6 || !message) {
      Notify.failure('Sorry, minimal length 6 letters. Please try again.');
      return;
    }
    if (message.length >= 300 || !message) {
      Notify.failure('Sorry, maximal length 300 letters. Please try again.');
      return;
    }
    if (editReview) {
      if (reviewOwn.comment === currentMessage && reviewOwn.rating === rating) {
        return;
      }
      dispatch(updateReview({ rating, comment: message }));
      reset();
      onClose();
      return;
    }
    dispatch(addReview({ rating, comment: message }));
    reset();
    onClose();
  };
  const handleClickEdit = () => {
    setEditReview(true);
  };
  const handleClickDelete = () => {
    if (rating === 0 && message === '') {
      return;
    }
    dispatch(deleteReview());
    reset();
    onClose();
  };
  return (
    <Formik
      initialValues={{ rating, message }}
      validationSchema={userValidSchema}
      onSubmit={e => {
        handleSubmit(e);
      }}
    >
      <FeedbackForm>
        <FeedbackFormLabel>Rating</FeedbackFormLabel>
        <StarContainerWrap>
          {[...Array(5)].map((star, i) => {
            const ratingValue = 1 + i;
            return (
              <label key={i}>
                <FeedbackFormStarInput
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                  disabled={
                    editReview === true ||
                    reviewOwn === null ||
                    (reviewOwn.rating !== rating &&
                      reviewOwn.comment !== message)
                      ? false
                      : true
                  }
                />
                <StarBtn
                  fill={
                    ratingValue <= (hover || rating) ? '#FFAC33' : '#CEC9C1'
                  }
                  width={24}
                  height={24}
                  disabled={
                    editReview === true ||
                    reviewOwn === null ||
                    (reviewOwn.rating !== rating &&
                      reviewOwn.comment !== message)
                      ? false
                      : true
                  }
                  style={{ marginRight: 1 }}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </StarContainerWrap>
        <div>
          <LabelAndButtonDiv>
            <FeedbackFormLabel htmlFor="FBId">Review</FeedbackFormLabel>
            {reviewOwn === null ||
            !reviewOwn.rating ||
            (reviewOwn.rating === rating && reviewOwn.comment === message) ? (
              <BtnWrap>
                <EditButton  onClick={handleClickEdit} />
                <CancelButton
                  onClick={handleClickDelete}
                />
              </BtnWrap>
            ) : (
              <></>
            )}
          </LabelAndButtonDiv>
          <TextInput
            type="textarea"
            as="textarea"
            required
            value={message}
            onChange={event => setMessage(event.currentTarget.value)}
            id="FBId"
            name="message"
            placeholder="Enter text"
            disabled={
              editReview === true ||
              reviewOwn === null ||
              (reviewOwn.rating !== rating && reviewOwn.comment !== message)
                ? false
                : true
            }
          />
        </div>
        {reviewOwn === null || editReview === true ? (
          <BtnWrap>
            {editReview === true ? (
              <BtnSaveOrEdit type="submit" onClick={handleSubmit}>
                Edit
              </BtnSaveOrEdit>
            ) : (
              <BtnSaveOrEdit
                type="submit"
                onClick={handleSubmit}
                disabled={!rating && !message}
              >
                Save
              </BtnSaveOrEdit>
            )}
            <BtnCancel
              type="button"
              onClick={() => {
                reset();
                onClose();
              }}
            >
              Cancel
            </BtnCancel>
          </BtnWrap>
        ) : (
          <></>
        )}
      </FeedbackForm>
    </Formik>
  );
};
export default FormFeedback;
