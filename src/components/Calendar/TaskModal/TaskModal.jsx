import React from 'react';
// import { useState } from 'react';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch } from 'react-redux';
import tasksOperations from 'redux/tasks/tasksOperation';

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
  idForEdit,
  currentTask,
}) => {
  const dispatch = useDispatch();

  // початкові значення полів форми
  let initialValues;
  if (operation === 'create') {
    initialValues = {
      title: '',
      start: '00:00', //приклад valid
      end: '00:00', //приклад valid
      // start: '',
      // end: '',
      priority: 'low',
    };
  }
  if (operation === 'edit') {
    initialValues = {
      title: currentTask.title,
      start: currentTask.start, //приклад valid
      end: currentTask.end, //приклад valid
      // start: '',
      // end: '',
      priority: currentTask.priority,
    };
  }

  // const [inforTask, setInfoTask] = useState({ initialValues }); //приклад valid

  // Обробник сабміту
  const handleSubmit = (values, actions) => {
    // if (inforTask.start > inforTask.end) {
    //   Notify.failure('Start time cannot be later than end time');
    //   return; //приклад valid
    // }

    // у обʼєкт values повертаються дані з форми
    // console.log('values', values);
    // тут буде проходити реєстрація  dispatch(authOperations.logIn(values));

    if (operation === 'create') {
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
      console.log('updatedTask', updatedTask);
      dispatch(
        tasksOperations.updateTask({ id: currentTask._id, updatedTask })
      );
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
                <StyledFormikInput
                  type="time"
                  name="start"
                  // value={initialValues.start}
                />
                приклад valid
              </Label>

              <Label htmlFor="end">
                End
                <StyledFormikInput
                  type="time"
                  name="end"
                  // value={initialValues.end}
                />
                приклад valid
              </Label>
            </TimeBlock>

            <RadioBlock>
              <RadioLabel>
                <RadioInputBlue type="radio" name="priority" value="low" />
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
        </Formik>
      </ModalContainer>
    </Backdrop>,
    modalRoot
  );
};

export default TaskModal;
