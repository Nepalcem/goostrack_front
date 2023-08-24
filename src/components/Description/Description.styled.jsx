import styled from 'styled-components';
import { Container } from '../App/App.styled';

export const DescriptionBlock = styled.section``;

export const DescriptionContainer = styled(Container)`
  padding-top: 64px;

  @media screen and (min-width: 1440px) {
    padding-left: 128px;
    padding-right: 128px;
  }
`;
