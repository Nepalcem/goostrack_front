import React, { useState } from 'react';

// стилізовані компоненти
import {
  MainTasksContainer,
  TaskBlock,
  TaskBlockTitle,
  Title,
  AddTaskButton,
  IcoAdd,
  TasksWrap,
  AddTaskButtonBig,
  IcoAdd2,
} from './TasksColumnsList.styled';

// компонент однієї таски
import DayTask from '../DayTask/DayTask';

// іконки
import IcoAddTask from '../../../images/svg/plus.svg';
import IcoAddTask2 from '../../../images/svg/plus2.svg';
import TaskModal from '../TaskModal/TaskModal';
import { useParams } from 'react-router-dom';

const TasksColumnsList = ({ tasksPerDay, handleDelete }) => {
  const [modalAddTaskIsOpened, setModalAddTaskIsOpened] = useState(false);
  const [category, setCategory] = useState('');

  const { currentDay } = useParams();

  const handleToggle = () => {
    setModalAddTaskIsOpened(prevState => !prevState);
  };

  return (
    <>
      {modalAddTaskIsOpened && (
        <TaskModal
          category={category}
          handleToggle={handleToggle}
          currentDay={currentDay}
          operation="create"
        />
      )}
      <MainTasksContainer>
        <TaskBlock>
          <TaskBlockTitle>
            <Title>To do</Title>
            <AddTaskButton
              onClick={() => {
                setCategory('to-do');

                handleToggle();
              }}
            >
              <IcoAdd src={IcoAddTask} />
            </AddTaskButton>
          </TaskBlockTitle>
          <TasksWrap>
            {tasksPerDay.map(cuurentTast => {
              return (
                cuurentTast.category === 'to-do' && (
                  <DayTask
                    key={cuurentTast._id}
                    currentTask={cuurentTast}
                    handleDelete={handleDelete}
                  />
                )
              );
            })}
          </TasksWrap>
          <AddTaskButtonBig
            onClick={() => {
              setCategory('to-do');

              handleToggle();
            }}
          >
            <IcoAdd2 src={IcoAddTask2} />
            Add task
          </AddTaskButtonBig>
        </TaskBlock>

        <TaskBlock>
          <TaskBlockTitle>
            <Title>In progress</Title>
            <AddTaskButton
              onClick={() => {
                setCategory('in-progress');
                handleToggle();
              }}
            >
              <IcoAdd src={IcoAddTask} />
            </AddTaskButton>
          </TaskBlockTitle>
          <TasksWrap>
            {tasksPerDay.map(cuurentTast => {
              return (
                cuurentTast.category === 'in-progress' && (
                  <DayTask
                    key={cuurentTast._id}
                    currentTask={cuurentTast}
                    handleDelete={handleDelete}
                  />
                )
              );
            })}
          </TasksWrap>
          <AddTaskButtonBig
            onClick={() => {
              setCategory('in-progress');

              handleToggle();
            }}
          >
            <IcoAdd2 src={IcoAddTask2} />
            Add task
          </AddTaskButtonBig>
        </TaskBlock>

        <TaskBlock>
          <TaskBlockTitle>
            <Title>Done</Title>
            <AddTaskButton
              onClick={() => {
                setCategory('done');

                handleToggle();
              }}
            >
              <IcoAdd src={IcoAddTask} />
            </AddTaskButton>
          </TaskBlockTitle>
          <TasksWrap>
            {tasksPerDay.map(cuurentTast => {
              return (
                cuurentTast.category === 'done' && (
                  <DayTask
                    key={cuurentTast._id}
                    currentTask={cuurentTast}
                    handleDelete={handleDelete}
                  />
                )
              );
            })}
          </TasksWrap>
          <AddTaskButtonBig
            onClick={() => {
              setCategory('done');

              handleToggle();
            }}
          >
            <IcoAdd2 src={IcoAddTask2} />
            Add task
          </AddTaskButtonBig>
        </TaskBlock>
      </MainTasksContainer>
    </>
  );
};

export default TasksColumnsList;
