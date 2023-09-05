import { addDays, getTime } from 'date-fns';
import {
  ButtonsContainer,
  // CalendarButton,
  List,
  ListItem,
  PeriodPaginatorContainer,
} from './PaginatorStatistics.styled';

import {
  ButtonChangeDate,
  ButtonsChangePeriodDiv,
  Svg,
} from 'components/Calendar/CalendarToolbar/PeriodPaginator/PeriodPaginator.styled';
import DatePicker from 'react-datepicker';
import { StatisticsDatePickerGlobalStyles } from './StatisticsDatepicker.styled';
const PeriodPaginatorStatistics = ({ date, setDate }) => {
  const onClickBtn = (step, period) => {
    let newDate = null;
    if (period === 'day') {
      newDate = addDays(date, step);
    }
    const millisec = getTime(newDate);
    setDate(millisec);
  };

  return (
    <PeriodPaginatorContainer>
      <ButtonsContainer>
        <DatePicker
          calendarStartDay={1}
          selected={date}
          onChange={date => {
            setDate(date);
          }}
          dateFormat="dd MMMM yyyy"
        />
        <StatisticsDatePickerGlobalStyles />
        <ButtonsChangePeriodDiv>
          <ButtonChangeDate
            border="right"
            onClick={() => onClickBtn(-1, 'day')}
          >
            <Svg xmlns="http://www.w3.org/2000/svg" fill="none">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M10 12 6 8l4-4"
              />
            </Svg>
          </ButtonChangeDate>
          <ButtonChangeDate onClick={() => onClickBtn(1, 'day')}>
            <Svg xmlns="http://www.w3.org/2000/svg" fill="none">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m6 12 4-4-4-4"
              />
            </Svg>
          </ButtonChangeDate>
        </ButtonsChangePeriodDiv>
      </ButtonsContainer>
      <List>
        <ListItem>By Day</ListItem>
        <ListItem>By Month</ListItem>
      </List>
    </PeriodPaginatorContainer>
  );
};

export default PeriodPaginatorStatistics;
