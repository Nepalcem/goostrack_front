import styled from 'styled-components';

export const NameDaysComponent = styled.div`
  display: flex;
  background-color: #ffffff;
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  margin-top: 24px;
  padding-top: 14px;
  padding-bottom: 14px;

  @media screen and (min-width: 768px) {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 32px;
    padding-top: 14px;
    padding-bottom: 14px;
  }
`;

export const DayComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 48px;

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
  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
    width: 100px;
  }
  @media screen and (min-width: 1440px) {
    width: 155px;
  }

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

  margin-top: 6px;

  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
    margin-top: 4px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 8px;
  }
`;

export const CurrentDayNumber = styled.div`
  padding: 4px 6px 4px 6px;
  border-radius: 6px;

  font-family: Inter;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;

  color: ${({ currentDay, day }) =>
    currentDay !== day ? `var(--color - calendar - day)` : `#FFFF`};
  background-color: ${({ currentDay, day }) =>
    currentDay !== day ? `#fff` : '#3E85F3'}; //primaryColor

  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
    margin-top: 4px;
    padding: 4px 8px 4px 8px;
    font-size: 16px;
    line-height: 18px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 8px;
  }
`;

// #FFFFFF
