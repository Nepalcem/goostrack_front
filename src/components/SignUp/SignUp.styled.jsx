import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  background-color: #dcebf7;
`;

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
