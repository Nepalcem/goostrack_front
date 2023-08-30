import styled from 'styled-components';


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
