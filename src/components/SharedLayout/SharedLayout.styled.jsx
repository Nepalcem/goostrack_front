import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

// ALL PAGE
export const Main = styled.main`
  background-color: var(--main-background-color);
  // background-color: #f7f6f9;
  margin-bottom: 0;
`;

// CONTAINER
export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 375px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 24px 20px;
  outline: 2px solid tomato;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 24px 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    flex-direction: row;
    padding-left: 0;
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 1440px) {
    padding-top: 40px;
  }
`;

export const TopMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const TopMenuLeftPart = styled.div``;

export const BurgerMenuButton = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;

  width: 24px;
  height: 24px;

  &:hover {
  }

  @media screen and (min-width: 768px) {
    width: 34px;
    height: 34px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const BurgerMenuButtonIco = styled(ReactSVG)`
  stroke: var(--color-name-pages);

  :hover {
    stroke: #3e85f3;
  }
`;
