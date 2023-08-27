import styled from 'styled-components';

export const CalendarToolbarDiv = styled.div`
  display: flex;
  @media screen and (min-width: 375px) {
    flex-direction: column;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media screen and (min-width: 1440px) {
  }
`;
