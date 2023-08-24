import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MessageBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
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
