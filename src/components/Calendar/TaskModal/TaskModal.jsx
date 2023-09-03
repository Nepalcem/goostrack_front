import React from 'react';

// Бібліотека формік
import { Formik, Form, } from 'formik';

import {
  Backdrop,
  ModalContainer,
  CloseButton,
  CloseButtonIco,
  StyledFormikInput,
  TimeBlock,
  Label,
  BlockButton,
  EditButton,
  AddTasks,
  CancelButton,
  RadioBlock,
  RadioLabel,
  RadioInputBlue,
  RadioInputYellow,
  RadioInputRed,
} from './TaskModal.style';

import CloseIco from '../../../images/svg/x-close.svg';
import PlusButton from '../../../images/svg/log-out.svg'; //змінити на +
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
            <Label htmlFor="title">
              Title
            <StyledFormikInput
              type="text"
              name="title"
              placeholder="Enter text"
            />
            </Label>
            <TimeBlock>
                <Label htmlFor="start">
                  Start
                <StyledFormikInput type="time" name="start" />
                </Label>
              
                <Label htmlFor="end">
                  End
                <StyledFormikInput type="time" name="end" />
                </Label>
            </TimeBlock>

            <RadioBlock>
              <RadioLabel>
                <RadioInputBlue type="radio" name="priority" value="low" checked />
                Low
              </RadioLabel>
              <RadioLabel>
                <RadioInputYellow type="radio" name="priority" value="medium" />
                Medium
              </RadioLabel>
              <RadioLabel>
                <RadioInputRed type="radio" name="priority" value="high" />
                High
              </RadioLabel>
            </RadioBlock>

            {/* <button type="submit">Add</button>
            <button type="button" onClick={handleToggle}>
              Cancel
            </button> */}

            <BlockButton>
            <EditButton type="submit">
            <AddTasks src={PlusButton} alt="add button" />
              Add
            </EditButton>

            <CancelButton type="button" onClick={handleToggle}>
              Cancel
            </CancelButton>
          </BlockButton>


          </Form>
        </Formik>
      </ModalContainer>
    </Backdrop>,
    modalRoot
  );
};

export default TaskModal;
