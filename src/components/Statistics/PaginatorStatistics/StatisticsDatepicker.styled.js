import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import { primaryColor, whiteColor } from 'utils/variables';

export const StyledStatisticsDatepicker = styled.div`
  .react-datepicker__wrapper {
    position: relative;
  }
  .react-datepicker {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-1%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 327px;
    height: 354px;
    padding: 13px 0px 0px 0px;
    background-color: #3e85f3;
    font-family: Inter;
    border-radius: 16px;
  }
  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
    width: 100%;
  }
  .react-datepicker__header {
    position: relative;
    background-color: #3e85f3;
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__day
    react-datepicker__day--018.react-datepicker__day--selected
    react-datepicker__day--today {
    outline: none;
    border: none;
  }
  .react-datepicker__current-month {
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    color: white;
  }
  .react-datepicker__day-name {
    margin: 0;
    padding: 8px 8px;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    text-align: center;
    color: white;
  }
  .react-datepicker__navigation {
    margin-top: 24px;
    color: white;
  }
  .react-datepicker__navigation--previous {
    left: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation--next {
    right: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: white;
  }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    margin: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: white;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
  }
  .react-datepicker__month {
    display: flex;
    gap: 12px;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px 16px 0px 16px;
    margin: 0;
  }
  .react-datepicker__day--selected {
    background-color: white;
    color: #3e85f3;
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
    background-color: white;
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color: white;
    color: #3e85f3;
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color: white;
    color: #3e85f3;
  }
  .react-datepicker__day--weekend {
    opacity: 50%;
  }
  .react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }
  .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }
  .react-datepicker__triangle {
    visibility: hidden;
  }

  .react-datepicker__input-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-datepicker__input-container input {
    cursor: pointer;
    caret-color: transparent;
    display: block;
    border: none;
    background-color: ${primaryColor};
    color: ${whiteColor};
    outline: none;
    padding: 8px 12px;
    font-size: 14px;
    line-height: calc(18 / 14);
    font-weight: 700;
    font-family: Inter;
    max-width: 170px;
    @media screen and (min-width: 768px) {
      max-width: 200px;
      padding: 10px 12px;
      font-size: 16px;
    }
    border-radius: 8px;
  }
`;
