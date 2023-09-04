import styled from 'styled-components';

import { ReactSVG } from 'react-svg';

export const MainTasksContainer = styled.div`
  // overflow-y: scroll;
  display: flex;
  gap: 20px;
  // overflow: hidden;

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
background-color: var(--color-btn-change-day);
border: var(--color-calendar-border);
  /* background-color: #fff; */
  min-width: 335px;
  height: 432px;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  border-radius: 8px;

  padding: 18px 18px 10px 14px;
 


  // overflow-y: auto;

  //   ::-webkit-scrollbar {
  //     width: 8px;
  // }
  
  // ::-webkit-scrollbar-track {
  //   // background:transparent
  //     background: var(--scrollbar-track);
  //     border-radius: 12px;
  // }
  
  // ::-webkit-scrollbar-thumb {
  //     background: var(--scrollbar-thumb);
  //     height: 112px;
  //     border-radius: 12px;
  // }
  
  // ::-webkit-scrollbar-thumb:hover {
  //     background: #7c7c7c;
  // }


  @media screen and (min-width: 768px) {
    min-width: 344px;
    padding: 18px 18px 28px 14px;
  }

  @media screen and (min-width: 1440px) {
    min-width: calc((100% - 54px) / 3);
  }
`;

export const TaskBlockTitle = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;

  
  
`;

export const Title = styled.h3`
  color: var(--color-name-pages);
  /* color: #111; */
  text-align: left;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.11111;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const AddTaskButton = styled.button`
  width: 22px;
  height: 22px;
  border: none;
  background-color: transparent;
  padding: 0;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const IcoAdd = styled(ReactSVG)`
  width: 100%;
  height: 100%;
  stroke: var(--color-name-pages);
  :hover {
    stroke: #3e85f3;
  }
`;

export const TasksWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
  // background:transparent
    background: var(--scrollbar-track);
    border-radius: 12px;
}

::-webkit-scrollbar-thumb {
    background: var(--scrollbar-thumb);
    height: 112px;
    border-radius: 12px;
}

::-webkit-scrollbar-thumb:hover {
    background: #7c7c7c;
}

  @media screen and (min-width: 768px) {
    gap: 18px;
  }
`;

export const AddTaskButtonBig = styled.button`
  cursor: pointer;

  margin-top: 32px;
  display: flex;

  padding-top: 16px;
  padding-bottom: 16px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 8px;
  border: 1px dashed #3e85f3;
  /* background: #e3f3ff; */
  background-color: var(--color-calendar-day-addtaskbtn-bg);

  /* color: #111; */
  color: var(--color-name-pages);
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.28571;
`;

export const IcoAdd2 = styled(ReactSVG)`
  width: 24px;
  height: 24px;
  stroke: var(--color-name-pages);
`;
