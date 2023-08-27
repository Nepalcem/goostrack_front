import React from 'react';
import { format } from 'date-fns';

import svgLeft from '../../../../images/svg/chevronLeft.svg';
import svgRight from '../../../../images/svg/chevronRight.svg';

import {
  PeriodPaginatorDiv,
  DisplayDataDiv,
  ButtonChangePeriod,
  ButtonsChangePeriodDiv,
} from './PeriodPaginator.styled';
const PeriodPaginator = ({ date, period, onClick }) => {
  return (
    <PeriodPaginatorDiv>
      {/* отображение даты в нужном формате */}
      <DisplayDataDiv>
        {period === 'month' && <div>{format(date, 'MMMM yyyy')}</div>}
        {period === 'day' && <div>{format(date, 'dd MMM yyyy')}</div>}
      </DisplayDataDiv>
      {/* кнопки вібора периода */}
      <ButtonsChangePeriodDiv>
        <ButtonChangePeriod border="right" onClick={() => onClick(-1, period)}>
          <img src={svgLeft} alt="" />
        </ButtonChangePeriod>
        <ButtonChangePeriod onClick={() => onClick(1, period)}>
          <img src={svgRight} alt="" />
        </ButtonChangePeriod>
      </ButtonsChangePeriodDiv>
    </PeriodPaginatorDiv>
  );
};
export default PeriodPaginator;

// "1. Компонент отримує в пропсах дату, тип періоду та метод для зміни дати.
// 2. Компонент рендерить розмітку з відформатованим періодом дат в залежності від обраних дати та періоду та блок з кнопками для зміни дати, що збільшують або зменшують період до наступного/попереднього відповідно.
// 3. Клік по кнопках змінює дату в залежності від типу періоду:
//  - month - залишає число поточного дня місяця змінюючи місяць/рік попереднього/наступного місяця
//  - day - змінює дату поточного дня  на дату попереднього/наступного дня
// 4. Компонент форматує період:
//  - month - MARCH 2023
//  - day - 6 MARCH 2023"
