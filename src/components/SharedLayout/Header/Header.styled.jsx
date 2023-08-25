import styled from 'styled-components';

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



