import styled from 'styled-components';

export const FeedbackButtonStyle = styled.button`
  padding: 8px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #3e85f3;
  border: none;

  color: #ffffff;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.33333;

  cursor: pointer;

  transition: background-color 250ms linear;

  &:hover {
    background-color: #2b78ef;
  }

  @media screen and (min-width: 768px) {
    padding: 12px 32px;

    font-size: 14px;
    line-height: 1.28571;
  }
`;
export const FeedbackWrapper = styled.div`
  @media screen and (min-width: 375px) {
    max-height: 564px;
  }

  @media screen and (min-width: 768px) {
    max-height: 673px;
  }
`;
