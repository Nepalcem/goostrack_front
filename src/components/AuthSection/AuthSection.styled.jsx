import styled from 'styled-components';
import { Container } from '../App/App.styled';

export const AuthSectionBlock = styled.section`
  background-color: #3e85f3;
`;

export const AuthSectionContainer = styled(Container)`
  height: 812px;
  align-items: center;
  padding-top: 256px;

  /*----Стиль для планшета 768-1440 (адаптивний)----*/
  @media screen and (min-width: 768px) {
    height: 1024px;
  }

  /*----Стиль для компа від 1440 (адаптивний)----*/
  @media screen and (min-width: 1440px) {
    height: 770px;
  }
`;

export const Img = styled.img`
  width: 142px;

  /*----Стиль для планшета 768-1440 (адаптивний)----*/
  @media screen and (min-width: 768px) {
    width: 150px;
  }
`;

export const HeroText = styled.h1`
  font-family: Inter;
  font-size: 44px;
  line-height: 1.09091;
  font-style: italic;
  font-weight: 700;

  color: #fff;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);

  /*----Стиль для планшета 768-1440 (адаптивний)----*/
  @media screen and (min-width: 768px) {
    font-size: 100px;
    line-height: 1.3;
  }

  /*----Стиль для компа від 1440 (адаптивний)----*/
  @media screen and (min-width: 1440px) {
    font-size: 120px;
    line-height: 1.25;
  }
`;
