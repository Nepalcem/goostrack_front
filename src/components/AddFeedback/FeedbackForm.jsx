import { useFormik } from 'formik';
import * as yup from 'yup';
import { FaStar } from 'react-icons/fa';
import { BiPencil } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  deleteReview,
  addReview,
  updateReview,
} from '../../redux/reviews/reviewsOperation';
import ModalButton from 'components/FeedbackModal/ModalButton/ModalButton';
import { selectOwnerReviews } from '../../redux/reviews/reviewsSelectors';

import {
  StarWrapper,
  NameLabel,
  InputStars,
  FeedbackWrapper,
  InputFeedback,
  ErrorsMessage,
  IconWrapper,
  CircleIcon,
  TitleWrapper,
  IconButton,
} from './FeedbackForm.styled';

const FeedbackForm = ({ toggleModal }) => {
  const data = useSelector(selectOwnerReviews);

  const dispatch = useDispatch();

  // console.log('data:',data);
  // console.log('type of data:',typeof(data));
  // console.log(!data);
  // console.log(data.length);
  const [isEditing, setIsEditing] = useState(false);
  const [open, setOpen] = useState(false);

  const feedbackValidationSchema = yup.object().shape({
    rating: yup.number().min(1).max(5).required('Leave your rating'),
    comment: yup
      .string()
      .trim()
      .notOneOf([' '])
      .max(300)
      .required('Leave your feedback'),
  });

  const initialValues = {
    rating: data.rating || 0,
    comment: data.comment || '',
  };

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

   const handleClose = () => {
    setOpen(false);
  };

  const handleCloseYes = actions => {
    dispatch(deleteReview());
    Notify.info('Review deleted');
    setOpen(false);
    toggleModal();
  };

  const formik = useFormik({
    initialValues,
    validationSchema: feedbackValidationSchema,

    onSubmit: async values => {
      try {
      if (Object.keys(data).length === 0) {
        await dispatch(addReview(values));
        Notify.success('Review created successfully');
      } 
      if (Object.keys(data).length > 0) {
        await dispatch(updateReview(values));
        Notify.success('Review updated successfully');
      }
        toggleModal();
      } catch (error) {
        Notify.error('Oops, something went wrong...');
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <StarWrapper>
        <NameLabel>Rating</NameLabel>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;

          return (
            <label key={i}>
              <InputStars
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => formik.setFieldValue('rating', ratingValue)}
                onChange={formik.handleChange}
              />
              <FaStar
                cursor={"pointer"}
                size={24}
                color={
                  ratingValue <= formik.values.rating ? '#FFAC33' : '#CEC9C1'
                }
                style={{ marginRight: '2px' }}
              />
            </label>
          );
        })}
        {formik.errors.rating && formik.touched.rating && (
          <ErrorsMessage>Leave your rating</ErrorsMessage>
        )}
      </StarWrapper>
      <FeedbackWrapper>
        <TitleWrapper>
          <NameLabel>Review</NameLabel>
          {Object.keys(data).length > 0 && (
            <IconWrapper>
              <IconButton type="button" onClick={() => setIsEditing(prevIsEditing => !prevIsEditing)}>
                <CircleIcon backgroundColor="#E3F3FF">
                  <BiPencil size={20} color={'#3E85F3'} cursor= {'pointer'}/>
                </CircleIcon>
              </IconButton>
              <IconButton type="button" onClick={handleCloseYes}>
                <CircleIcon backgroundColor="rgba(234, 61, 101, 0.2)">
                  <RiDeleteBinLine size={20} color={'#EA3D65'} cursor= {'pointer'}/>
                </CircleIcon>
              </IconButton>
            </IconWrapper>
          )}
        </TitleWrapper>

        <InputFeedback
          type="text"
          rows="7"
          name="comment"
          value={formik.values.comment}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter text"
          hasError={!!formik.errors.comment && !!formik.touched.comment}
          disabled={!isEditing && Object.keys(data).length !== 0}
        />
        {formik.errors.comment && formik.touched.comment && (
          <ErrorsMessage>{formik.errors.comment}</ErrorsMessage>
        )}
      </FeedbackWrapper>
      {Object.keys(data).length === 0 && (
        <div>
          <ModalButton
            type="submit"
            textColor="#FFFFFF"
            backgroundColor="#3E85F3"
          >
            <span>Save</span>
          </ModalButton>
          <ModalButton type="button" onClick={toggleModal}>
            Cancel
          </ModalButton>
        </div>
      )}
      {isEditing && (
        <div>
          <ModalButton
            type="submit"
            textColor="#FFFFFF"
            backgroundColor="#3E85F3"
          >
            <span>Edit</span>
          </ModalButton>
          <ModalButton type="button" onClick={toggleModal}>
            Cancel
          </ModalButton>
        </div>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Delete review?'}</DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseYes}>Yes</Button>
          <Button onClick={handleClose} autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
};

export default FeedbackForm;
