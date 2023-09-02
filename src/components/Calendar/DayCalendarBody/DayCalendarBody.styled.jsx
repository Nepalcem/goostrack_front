import styled from 'styled-components';

export const MainTasksContainer = styled.div`
  overflow-y: scroll;
  display: flex;
  gap: 20px;

  padding-bottom: 34px;
  margin-top: 14px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    gap: 27px;
  }
`;

export const TaskBlock = styled.div`
  background-color: #fff;
  min-width: 335px;
  height: 432px;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.5);

  padding: 18px 18px 10px 14px;

  overflow-y: auto;

  @media screen and (min-width: 768px) {
    min-width: 344px;
    padding: 18px 18px 28px 14px;
  }
`;

export const TaskBlockTitle = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  color: #111;
  text-align: left;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.11111;
`;

export const AddTaskButton = styled.button``;

export const TasksWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
