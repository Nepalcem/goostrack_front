import { useNavigate, useLocation } from 'react-router-dom';
import { format, parse, add, sub } from 'date-fns';
import PropTypes from 'prop-types';

import { ReactComponent as LeftArrow } from 'images/svg/chevron-left.svg';
import { ReactComponent as RightArrow } from 'images/svg/chevron-right.svg';

import {
  Btn,
  Ul,
  Li,
  StyledDate,
  PeriodPaginatorWrapper,
} from './PeriodPaginator.styled';

export const PeriodPaginatorStatistics = ({
  type,
  normalizedDate,
  setDate,
}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const date = parse(normalizedDate, 'yyyy-MM-dd', Date.now());

  const onChangeDate = e => {
    const period = `${type}s`;
    const newDate =
      e.currentTarget.name === 'addition'
        ? add(date, { [period]: 1 })
        : sub(date, { [period]: 1 });

    const formattedNewDate = format(newDate, 'yyyy-MM-dd');
    setDate(formattedNewDate);
    if (pathname.includes('/calendar/')) {
      navigate(`${type}/${formattedNewDate}`);
    }
    return;
  };

  const currentDate = format(date, 'dd MMMM yyyy');

  return (
    <PeriodPaginatorWrapper>
      <StyledDate>
        {type === 'month' ? currentDate.slice(3) : currentDate}
      </StyledDate>
      <Ul>
        <Li>
          <Btn
            type="button"
            name="subtraction"
            className="subtraction"
            onClick={onChangeDate}
          >
            <LeftArrow />
          </Btn>
        </Li>
        <Li>
          <Btn
            type="button"
            name="addition"
            className="addition"
            onClick={onChangeDate}
          >
            <RightArrow />
          </Btn>
        </Li>
      </Ul>
    </PeriodPaginatorWrapper>
  );
};

PeriodPaginatorStatistics.propTypes = {
  type: PropTypes.string.isRequired,
};
