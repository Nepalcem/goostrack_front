import React from 'react';
import { ButtonStyled } from './Button.styled';
export const Button = ({
  textButton,
  type,
  width = '100%',
  height = '',
  svg,
}) => {
  return (
    <div>
      <ButtonStyled
        type={type}
        style={{
          width,
          height,
        }}
      >
        {textButton}
        {svg}
      </ButtonStyled>
    </div>
  );
};
