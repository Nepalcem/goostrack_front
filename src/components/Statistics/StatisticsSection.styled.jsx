import styled from 'styled-components';
import { whiteColor } from 'utils/variables';

export const StatisticsSectionContainer = styled.div`
  background-color: ${whiteColor};
  margin-top: 64px;
  width: 335px;

  padding: 28px 14px;
  border-radius: 16px;

  @media screen and (min-width: 768px) {
    width: 704px;

    padding: 132px 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1087px;
    margin-top: 32px;
    padding: 134px 113px;
  }
`;
