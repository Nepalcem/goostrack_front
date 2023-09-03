import React from 'react';

// Бібліотека формік
import { Formik, Form, Field } from 'formik';

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
  // Обробник сабміту
  const handleSubmit = (values, actions) => {
    // у обʼєкт values повертаються дані з форми
    console.log('values', values);
    // тут буде проходити реєстрація
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
  const initialValues = { title: '', start: '', end: '' };

  return createPortal(
    <Backdrop onClick={backdropClick}>
      <ModalContainer>
        <CloseButton onClick={handleToggle}>
          <CloseButtonIco src={CloseIco} alt="close menu" width="100%" />
        </CloseButton>

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form autoComplete="off">
            <label htmlFor="title">Title</label>
            <Field type="text" name="title" placeholder="Enter text" />
            <label htmlFor="start">Start</label>
            <Field type="time" name="start" />

            <label htmlFor="end">End</label>
            <Field type="time" name="end" />

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
