import styled from 'styled-components';

export const FooterStyled = styled.footer`
  height: auto;
  padding-bottom: 15px;
  margin-top: 20px;

  font-family: 'Inter';
  font-weight: 400;
  font-size: 14px;
  line-height: 1.14;

  text-align: center;
  color: #343434;
  background-color: #ffffff;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 16px;
    line-height: 1.18;
  }

  & p {
    margin: 0;
    padding: 0;

    @media screen and (max-width: 767px) {
      padding-bottom: 5px;
    }
  }
`;

export const TeamName = styled.span`
  color: #2476f1;
  margin-left: 5px;

  text-decoration-line: none;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;
