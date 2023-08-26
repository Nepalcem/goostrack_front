import styled from 'styled-components';

export const Main = styled.main`
  background-color: #f7f6f9;
  margin-bottom: 0;
`;

export const Container = styled.div`
  display: flex;
  max-width: 375px;
  min-height: 100vh;
  width: 1440px;
  margin: 0 auto;
  padding: 0 20;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
    padding-top: 24px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    flex-direction: row;
  }
`;

export const BurgerSide = styled.div`
  border-right: 1px solid #ffffff26;
  background-color: #f7f6f9;
  color: #3e85f3;

  width: ${props => (props.data ? '289px' : 'none')};

  @media screen and(min-width: 1440px) {
    display: flex;
    justify-content: end;
  }
`;
export const MainContent = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;

  padding-top: 24px;

  @media screen and (min-width: 1440px) {
    padding-top: 40px;
  }
`;

export const TopMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 32px;
  gap: 30px;

  @media screen and (min-width: 768px) {
    height: 42px;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    height: 42px;
  }
`;
