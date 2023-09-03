import styled from 'styled-components';

export const PeriodPaginatorContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 10px;
  }
`;

export const CalendarButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  padding: 6px 12px 6px 12px;
  border-radius: 8px;
  background-color: #3e85f3;

  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 22px;
  margin: 20px 0 0 10px;
  list-style-type: none;
  padding-left: 0;

  @media screen and (min-width: 768px) {
    padding-bottom: 15px;
  }
`;

export const ListItem = styled.li`
  position: relative;
  padding-left: 10px;
  font-size: 14px;
  color:var(--color-calendar-day);

  ::before {
    content: '•';
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
    font-size: 35px;
  }

  &:nth-child(1)::before {
    color: #ffd2dd;
    left: -20%;
  }

  &:nth-child(2)::before {
    color: #3e85f3;
    left: -15%;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
