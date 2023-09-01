import { addDays, format, getTime } from 'date-fns';
import {
  ButtonsContainer,
  List,
  ListItem,
  PeriodPaginatorContainer,
} from './PaginatorStatistics.styled';
import { useState } from 'react';

const PeriodPaginatorStatistics = () => {
  const [date, setDate] = useState(getTime(new Date()));

  const onClickBtn = (step, period) => {
    let newDate = null;
    if (period === 'day') {
      newDate = addDays(date, step); //змінюємо дату у будь-який бік
    }
    const millisec = getTime(newDate); //переводимо в millisec для форматування та запису в стейт
    setDate(millisec); //пишем в стейт
  };

  return (
    <PeriodPaginatorContainer>
      <ButtonsContainer>
        <div>{format(date, 'dd MMM yyyy')}</div>
        <div>
          <button border="right" onClick={() => onClickBtn(-1, 'day')}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M10 12 6 8l4-4"
              />
            </svg>
          </button>
          <button onClick={() => onClickBtn(1, 'day')}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m6 12 4-4-4-4"
              />
            </svg>
          </button>
        </div>
      </ButtonsContainer>
      <List>
        <ListItem>By Day</ListItem>
        <ListItem>By Month</ListItem>
      </List>
    </PeriodPaginatorContainer>
  );
};

export default PeriodPaginatorStatistics;
