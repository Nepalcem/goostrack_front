import styled from 'styled-components';

export const NameDaysComponent = styled.div`
  //padding-top: 64px;

  display: flex;
  background-color: #ffffff;
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  // width: '100%';
  @media screen and (min-width: 1440px) {
    padding-top: 14px;
    padding-bottom: 14px;
    /* padding-left: 60px;
    padding-right: 60px; */
  }
`;

export const DayComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 155px;
  /* padding-top: 14px;
  padding-bottom: 14px; */

  font-family: Inter;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;

  font-size: ${({ period }) => (period === 'month' ? '16px' : '14px')};

  color: ${({ period, nameDay }) =>
    (period === 'month' && nameDay === 'SAT') ||
    (period === 'month' && nameDay === 'SUN')
      ? '#3E85F3'
      : '#343434'};

  /* @media screen and (min-width: 1440px) {
    padding-left: 60px;
    padding-right: 60px;
  } */
`;

export const DayNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 155px;

  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: '#343434';

  @media screen and (min-width: 1440px) {
    padding-top: 8px;
  }
`;
