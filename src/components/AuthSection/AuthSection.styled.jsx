import styled from 'styled-components';
import { HeaderContainer } from '../App/App.styled';
import { ReactSVG } from 'react-svg';
import { primaryColor, whiteColor } from 'utils/variables';
import { Link } from 'react-router-dom';


export const LoginIco = styled(ReactSVG)`
  stroke: ${primaryColor};
  width: 18px;
  height: 18px;
`;

export const AuthSectionBlock = styled.section`

margin-bottom: 60px;
@media screen and (min-width: 1024px) {
margin-bottom: 0px;
}
  /* background-color: ${primaryColor}; */
`;

export const AuthSectionContainer = styled(HeaderContainer)`
  /* height: 812px; */
  align-items: center;
  /* padding-top: 256px; */
  padding: 80px 0px;

  /*----Стиль для планшета 768-1440 (адаптивний)----*/
  @media screen and (min-width: 768px) {
    /* height: 1024px; */
    padding: 100px 0px;
  }

  @media screen and (min-width: 1024px) {
    /* height: 1024px; */
    padding: 80px 0px 90px 0px;

  }

  /*----Стиль для компа від 1440 (адаптивний)----*/
  @media screen and (min-width: 1440px) {
    /* height: 770px; */
  }
`;

export const Img = styled.img`
  /* width: 142px; */

  /*----Стиль для планшета 768-1440 (адаптивний)----*/
  @media screen and (min-width: 768px) {
    /* width: 150px; */
  }
`;

export const HeroText = styled.h1`
  font-family: Inter;
  font-size: 44px;
  line-height: 1.09091;
  font-style: italic;
  font-weight: 700;

  color: ${whiteColor};
  text-shadow:rgba(0, 0, 0, 0.24) 0px 3px 8px;

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

export const AuthWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 32px;
  color: ${whiteColor};
  flex-direction: column-reverse;
  @media screen and (min-width: 768px) {
    gap: 24px;
    margin-top: 40px;
    flex-direction: row;
  }
`;

export const LoginLink = styled(Link)`
  display: flex;
  gap: 6px;
  border-radius: 16px;
  width: 130px;
  padding: 14px 32px;
  align-items: center;

  font-family: Inter;
  line-height: 18px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  color: ${primaryColor};
  background-color: ${whiteColor};
  cursor: pointer;

  &:hover{
    opacity: 0.8;
    // background-color: #d7e3f1;
  }
`;

export const SignUpLink = styled(Link)`
  color: ${whiteColor};
  cursor: pointer;
  font-weight: 700;
  line-height: 14px;
  font-family: Inter;
  font-size: 12px;

  &:hover{
    opacity: 0.8;
    // color: #3f5069;
  }
  @media screen and (min-width: 768px) {
    line-height: 18px;
    font-size: 14px;
  }
`;
