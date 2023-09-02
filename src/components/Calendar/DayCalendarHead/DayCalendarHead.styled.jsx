import styled from 'styled-components';

export const NameDaysComponent = styled.div`
  display: flex;
  background-color: #ffffff;
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  margin-top: 24px;
  width: 335px;

  @media screen and (min-width: 768px) {
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
  color: ${({ currentDay, day }) => (currentDay === day ? 'red' : '#343434')};

  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 678px) {
  }
  @media screen and (min-width: 1440px) {
    padding-top: 8px;
  }
`;

export const CurrentDayNumber = styled.div``;

// Mobile
// width: Hug (20px)
// height: Hug (22px)
// top: 102px
// left: 23px
// padding: 4px 6px 4px 6px
// border-radius: 6px
// gap: 10px
// background: #3E85F3;
// font
// font-family: Inter;
// font-size: 12px;
// font-weight: 700;
// line-height: 14px;
// letter-spacing: 0em;
// text-align: left;
// #FFFFFF

//tablet
// width: Hug (27px)
// height: Hug (26px)
// padding: 4px 8px 4px 8px
// border-radius: 8px
// gap: 10px
// background: #3E85F3;
// font
// font-family: Inter;
// font-size: 16px;
// font-weight: 700;
// line-height: 18px;
// letter-spacing: 0em;
// text-align: left;

//desktop
// width: Hug (27px)
// height: Hug (26px)
// padding: 4px 8px 4px 8px
// border-radius: 8px
// gap: 10px
// font-family: Inter;
// font-size: 16px;
// font-weight: 700;
// line-height: 18px;
// letter-spacing: 0em;
// text-align: left;
