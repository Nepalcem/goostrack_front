import styled from 'styled-components';

export const CalendarToolbarDiv = styled.div`
  display: flex;
  
  @media screen and (min-width: 375px) {
    flex-direction: column;
    margin-top: 64px;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;

    margin-top: 64px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 38px;
  }
`;
