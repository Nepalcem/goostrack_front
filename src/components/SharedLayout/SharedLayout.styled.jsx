import styled from 'styled-components';

export const Main = styled.main`
  background-color: #f7f6f9;
  margin-bottom: 0;
`;

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  max-width: 100vw;
  width: 1440px;
  margin: 0 auto;

 

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
    padding-top: 24px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    flex-direction: row;
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
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
  @media screen and (min-width: 1440px) {
    padding-left: 32px;
    padding-right: 32px;
    width: 100%;
  }
`;

export const TopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 64px;

  @media screen and (min-width: 1440px) {
    margin-top: 46px;
    margin-bottom: 33px;
  }
`;
