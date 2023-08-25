import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MessageBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const ErrImgContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Text4FromImg = styled.span`
  color: #3e85f3;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-family: Inter;
  font-size: 100px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5;
`;

export const InformationMessage = styled.h1`
  margin-bottom: 24px;
  margin-left: 27px;
  margin-right: 27px;

  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;

  text-align: center;
  color: rgba(17, 17, 17, 0.7);

  @media screen and (min-width: 768px) {
    width: 390px;
  }
`;

export const LinkToMain = styled(Link)`
  max-width: 153px;
  display: flex;
  padding: 14px 32px;
  align-items: center;
  justify-content: center;

  border-radius: 16px;
  background: #3e85f3;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

  text-decoration: none;

  color: #ffffff;
  font-family: Inter;
  font-size: 14px;
  /* font-style: normal; */
  font-weight: 600;
  line-height: 1.2857;
  letter-spacing: -0.28px;
`;
