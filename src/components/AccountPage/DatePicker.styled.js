import DatePicker from 'react-datepicker';
import '../../components/AccountPage/react-datepicker.css';
import styled from 'styled-components';
import { primaryColor } from 'utils/variables';

export const StyledDatePicker = styled(DatePicker)`
  .react-datepicker__month-container {
    background-color: ${primaryColor};
  }
  
  .react-datepicker__header {
    /* Customize the header of the calendar */
    background-color: #FFFFFF!important;
    border-bottom: none;
  }
  
  .react-datepicker__day {
    /* Customize individual day cells */
    color: #FFFFFF!important;
    font-size: 32px;
    &:hover {
      background-color: ${primaryColor};
      color: #fff;
    }
  }
  
  .react-datepicker__day-names {
    /* Customize the names of the days (e.g., Sun, Mon, etc.) */
    font-size: 14px;
  }
`;