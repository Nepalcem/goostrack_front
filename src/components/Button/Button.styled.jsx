import styled from 'styled-components';
import { primaryColor, whiteColor } from 'utils/variables';

export const ButtonStyled = styled.button`
  cursor: pointer;

  padding-top: 14px;
  padding-bottom: 14px;

  margin-top: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;

  border-width: 0;
  border-radius: 16px;
  background-color: ${primaryColor};
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

  color: ${whiteColor};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.28571;
  letter-spacing: -0.28px;

  transition: background-color 250ms linear;

  &:hover {
    background-color: ${primaryColor};
    box-shadow:rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 16px;
    padding-bottom: 16px;

    margin-top: 48px;

    font-size: 18px;
  }
`;


