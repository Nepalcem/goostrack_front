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
  width: 121px;
  height: 30px;
  border: 0;
  border-radius: 8px;
  color: #fff;
  background-color: #3e85f3;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    transform: scale(1.01);
    background-color: #2378f8;
  }

  @media screen and (min-width: 768px) {
    width: 134px;
    height: 34px;
    font-size: 16px;
    font-weight: 500;
  }
`;

export const SwitcherContainer = styled.div`
  display: flex;
  width: 72px;
  height: 30px;
  padding: 5px;
  border: 1px solid rgb(220, 227, 229, 50%);
  border-radius: 8px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    height: 100%;
    width: 1px;
    background-color: #dce3e5;
    top: 0;
    left: 35px;
  }

  @media screen and (min-width: 768px) {
    width: 74px;
    height: 34px;
  }
`;

export const SwitcherPart = styled.div`
  flex: 1;
  text-align: center;
  transition: transform 0.3s, color 0.3s;
  color: ${props => (props.active ? 'initial' : '#DCE3E5')};
  cursor: pointer;
  position: relative;

  &:hover {
    transform: scale(1.7);
  }

  @media screen and (min-width: 768px) {
    padding-top: 2px;
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
