import styled from 'styled-components';

export const MainTasksContainer = styled.div`
  overflow-y: scroll;
  display: flex;
  gap: 20px;

  padding-bottom: 34px;
  margin-top: 14px;
`;

export const TaskBlock = styled.div`
  background-color: #fff;
  min-width: 335px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.5);

  padding: 18px 18px 10px 14px;
`;

export const TaskBlockTitle = styled.h3`
  color: #111;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.11111;

  margin-bottom: 24px;
`;

export const TasksWrap = styled.div``;
