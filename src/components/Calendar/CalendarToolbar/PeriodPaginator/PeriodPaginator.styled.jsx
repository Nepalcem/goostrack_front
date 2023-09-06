import styled from 'styled-components';

export const PeriodPaginatorDiv = styled.div`
  display: flex;

  @media screen and (min-width: 375px) {
    justify-content: space-between;
    margin-bottom: 18px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const DisplayDataDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  padding: 6px 12px 6px 12px;
  border-radius: 8px;
  background-color: #3e85f3;

  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

export const ButtonsChangePeriodDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(220, 227, 229, 0.5);
  border-radius: 8px;
  overflow: hidden;
`;
export const Svg = styled.svg`
  width: 16px;
  height: 16px;

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const ButtonChangeDate = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 11px 16px;
  @media screen and (min-width: 768px) {
    padding: 12px 16px;
  }

  background-color: var(--color-btn-change-day);

  cursor: pointer;
  border: 0;

  &:hover {
    opacity: 0.8;
  }

  border-right: ${({ border }) =>
    border === 'right' ? '1px solid rgba(220, 227, 229, 0.5)' : 0};

  &:hover {
    ${Svg} {
      stroke: var(--color-btn-stroke-active);
    }
  }

  stroke: ${({ direction, place }) =>
    (place === 'left' && direction === 'back') ||
    (place === 'right' && direction === 'forvard')
      ? 'var(--color-btn-stroke-active)'
      : 'var(--color-btn-stroke)'};
`;
