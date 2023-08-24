import styled from 'styled-components';
import { Container } from '../App/App.styled';

export const AuthSectionBlock = styled.section`
  background-color: #3e85f3;
`;

export const AuthSectionContainer = styled(Container)`
  height: 812px;
  align-items: center;
  padding-top: 256px;
`;

export const Img = styled.img`
  width: 142px;

  /*----Стиль для планшета 768-1440 (адаптивний)----*/
  @media screen and (min-width: 768px) {
    width: 150px;
  }
`;
