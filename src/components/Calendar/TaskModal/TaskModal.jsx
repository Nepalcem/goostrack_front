import React from 'react';

// Бібліотека формік
import { Formik, Form, Field } from 'formik';

import {
  Backdrop,
  ModalContainer,
  CloseButton,
  CloseButtonIco,
  StyledFormikInput,
  TimeBlock,
} from './TaskModal.style';

import CloseIco from '../../../images/svg/x-close.svg';

// портал
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import tasksOperations from 'redux/tasks/tasksOperation';
const modalRoot = document.querySelector('#modal-root');

const TaskModal = ({ handleToggle, category, currentDay }) => {
  const dispatch = useDispatch();

  console.log('category', category);
  // Обробник сабміту
  const handleSubmit = (values, actions) => {
    // у обʼєкт values повертаються дані з форми
    console.log('values', values);
    // тут буде проходити реєстрація  dispatch(authOperations.logIn(values));
    const newTask = {
      title: values.title,
      start: values.start,
      end: values.end,
      date: currentDay,
      priority: values.priority,
      category: category,
    };
    console.log('newTask', newTask);

    dispatch(tasksOperations.addTask(newTask));

    actions.resetForm();
    handleToggle();
  };

  // при натисканні кнопки закриття
  const backdropClick = e => {
    if (e.currentTarget === e.target) {
      handleToggle();
    }
  };

  // початкові значення полів форми
  const initialValues = { title: '', start: '', end: '', priority: 'low' };

  return createPortal(
    <Backdrop onClick={backdropClick}>
      <ModalContainer>
        <CloseButton onClick={handleToggle}>
          <CloseButtonIco src={CloseIco} alt="close menu" width="100%" />
        </CloseButton>

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form autoComplete="off">
            <label htmlFor="title">Title</label>
            <StyledFormikInput
              type="text"
              name="title"
              placeholder="Enter text"
            />
            <TimeBlock>
              <div>
                <label htmlFor="start">Start</label>
                <StyledFormikInput type="time" name="start" />
              </div>
              <div>
                <label htmlFor="end">End</label>
                <StyledFormikInput type="time" name="end" />
              </div>
            </TimeBlock>

            <div>
              <label>
                <Field type="radio" name="priority" value="low" checked />
                Low
              </label>
              <label>
                <Field type="radio" name="priority" value="medium" />
                Medium
              </label>
              <label>
                <Field type="radio" name="priority" value="high" />
                High
              </label>
            </div>
            <button type="submit">Add</button>
            <button type="button" onClick={handleToggle}>
              Cancel
            </button>
          </Form>
        </Formik>
      </ModalContainer>
    </Backdrop>,
    modalRoot
  );
};

export default TaskModal;
