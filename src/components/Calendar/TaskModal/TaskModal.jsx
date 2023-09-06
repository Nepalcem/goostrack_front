import React from 'react';
import { useDispatch } from 'react-redux';
import { addTask, updateTask } from 'redux/tasks/tasksOperation';
import { useState } from 'react';

// Бібліотека формік
import { Formik, Form } from 'formik';

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
import PlusButton from '../../../images/svg/plus2.svg'; //змінити на +
import EditButtonIco from '../../../images/svg/pencil.svg'; //змінити на олівець

// портал
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');

const TaskModal = ({
  handleToggle,
  category,
  currentDay,
  operation,
  currentTask,
}) => {
  const dispatch = useDispatch();

  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  // початкові значення полів форми
  let initialValues;
  if (operation === 'create') {
    initialValues = {
      title: '',
      start: '00:00', //приклад valid
      end: '00:00', //приклад valid
      priority: 'low',
    };
  }
  if (operation === 'edit') {
    initialValues = {
      title: currentTask.title,
      start: currentTask.start, //приклад valid
      end: currentTask.end, //приклад valid
      priority: currentTask.priority,
    };
  }

  // Обробник сабміту
  const handleSubmit = (values, actions) => {
    if (operation === 'create') {
      const newTask = {
        title: values.title,
        start: values.start,
        end: values.end,
        date: currentDay,
        priority: values.priority,
        category: category,
      };
      dispatch(addTask(newTask));
    }

    if (operation === 'edit') {
      const updatedTask = {
        title: values.title,
        start: values.start,
        end: values.end,
        date: currentTask.date,
        priority: values.priority,
        category: currentTask.category,
      };
      dispatch(updateTask({ id: currentTask._id, updatedTask }));
    }

    actions.resetForm();
    handleToggle();
  };

  // при натисканні кнопки закриття
  const backdropClick = e => {
    if (e.currentTarget === e.target) {
      handleToggle();
    }
  };
  /////////
  const validateTitle = value => {
    let error;
    if (value === '') {
      error = 'Required';
    }
    return error;
  };
  /////
  // сохраняем start time todo в state
  const validateStartTime = value => {
    const hour = value.slice(0, 2);
    const minute = value.slice(3, 5);
    const start = parseInt(hour) * 60 + parseInt(minute);

    setStartTime(start);
    console.log('start:', startTime, 'end:', endTime);
    let error;
    if (endTime - startTime <= 0) {
      error = 'Start time is greater than end time';
    }
    return error;
  };
  // валидация EndTime > StartTime
  const validateEndTime = value => {
    const hour = value.slice(0, 2);
    const minute = value.slice(3, 5);
    const end = parseInt(hour) * 60 + parseInt(minute);

    setEndTime(end);
    console.log('start:', startTime, 'end:', endTime);

    let error;
    if (endTime - startTime <= 0) {
      error = 'End time is less than start time';
    }
    return error;
  };
  /////////////
  return createPortal(
    <Backdrop onClick={backdropClick}>
      <ModalContainer>
        <CloseButton onClick={handleToggle}>
          <CloseButtonIco src={CloseIco} alt="close menu" width="100%" />
        </CloseButton>

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ errors, touched }) => (
            <Form autoComplete="off">
              <Label htmlFor="title">
                Title
                <StyledFormikInput
                  type="text"
                  name="title"
                  placeholder="Enter text"
                  validate={validateTitle}
                />
                {errors.title && touched.title ? (
                  <div>{errors.title}</div>
                ) : null}
              </Label>
              <TimeBlock>
                <Label htmlFor="start">
                  Start
                  <StyledFormikInput
                    type="time"
                    name="start"
                    validate={validateStartTime}
                  />
                  {errors.start && touched.start ? (
                    <div>{errors.start}</div>
                  ) : null}
                </Label>

                <Label htmlFor="end">
                  End
                  <StyledFormikInput
                    type="time"
                    name="end"
                    validate={validateEndTime}
                  />
                  {errors.end && touched.end ? <div>{errors.end}</div> : null}
                </Label>
              </TimeBlock>

              <RadioBlock>
                <RadioLabel>
                  <RadioInputBlue type="radio" name="priority" value="low" />
                  Low
                </RadioLabel>
                <RadioLabel>
                  <RadioInputYellow
                    type="radio"
                    name="priority"
                    value="medium"
                  />
                  Medium
                </RadioLabel>
                <RadioLabel>
                  <RadioInputRed type="radio" name="priority" value="high" />
                  High
                </RadioLabel>
              </RadioBlock>

              <BlockButton>
                <EditButton type="submit">
                  {operation === 'create' && (
                    <AddTasks src={PlusButton} alt="add button" />
                  )}
                  {operation === 'edit' && (
                    <AddTasks src={EditButtonIco} alt="edit button" />
                  )}
                  {operation === 'create' && 'Add'}
                  {operation === 'edit' && 'Edit'}
                </EditButton>

                <CancelButton type="button" onClick={handleToggle}>
                  Cancel
                </CancelButton>
              </BlockButton>
            </Form>
          )}
        </Formik>
      </ModalContainer>
    </Backdrop>,
    modalRoot
  );
};

export default TaskModal;
