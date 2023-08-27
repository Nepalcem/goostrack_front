import styled from 'styled-components';

export const StatisticsWrapper = styled.section`
  width: 100%;

  @media screen and (min-width: 375px) and (max-width: 768px) {
    max-width: 335px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    max-width: 704px;
  }
`;

export const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 40px;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 48px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const PaginationWrapper = styled.div`
  position: relative;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const PeriodTime = styled.div`
  display: flex;
  gap: 14px;
`;

export const Period = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  line-height: 1.3;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ChartContainer = styled.div`
  position: relative;
  margin-top: auto;
  width: 100%;
  border-radius: 20px;
  border: 0.8px solid #e3f3ff26;
  padding: 40px 14px;
  height: 413px;

  @media screen and (min-width: 768px) {
    height: 424px;
    padding: 32px;
  }

  @media screen and (min-width: 1440px) {
    height: 440px;
    padding: 40px;
  }
`;
