import styled from 'styled-components';
export const ProfInfoWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const FeedbackButton = styled.button`
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

export const ThemeToggleButton = styled.button`
  margin-left: 18px;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;

  &:hover {
  }

  @media screen and (min-width: 768px) {
    margin-left: 24px;
    width: 32px;
    height: 32px;
  }
`;

export const NameField = styled.p`
  margin-left: 8px;

  color: #343434;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.28571;

  @media screen and (min-width: 768px) {
    margin-left: 14px;

    font-size: 18px;

    line-height: 1;
  }
`;

export const AvatarThumb = styled.div`
  margin-left: 8px;

  height: 32px;
  width: 33px;
  border-radius: 50%;
  overflow: hidden;

  /* border-radius: 32px; */
  border: 1.8px solid #3e85f3;
  background: lightgray 50% / cover no-repeat;

  @media screen and (min-width: 768px) {
    height: 44px;
    width: 44px;
    margin-left: 14px;
  }
`;

export const Avatar = styled.img`
  display: block;
  height: 100%;
  width: 100%;

  object-fit: cover;
`;
