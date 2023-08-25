import styled from 'styled-components';
import { Link } from 'react-router-dom';

import goose_1x from 'images/signUpPageImg/desktop_signupPage.png';
import goose_2x from 'images/signUpPageImg/desktop_signupPage@2x.png';

export const StyledLink = styled(Link)`
  color: #3e85f3;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.16667;
  text-decoration-line: underline;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33333;
  }
`;
  
export const Container = styled.div`
  position: relative;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #dcebf7;
`;

export const FormWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;

background-color: #dcebf7;
`;

export const ImgWrapper = styled.div`
  position: absolute;
  width: 400px;
  height: 416px;
  left: 49px;
  bottom: 0;

  background-image: url(${goose_1x});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-device-pixel-ratio: 2) {
    background-image: url(${goose_2x});
  }
  @media screen and (max-width: 1439px) {
    display: none;
  }
`;
