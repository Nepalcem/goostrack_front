import React from 'react';
import { ButtonStyled } from './Button.styled';
export const Button = ({ textButton, type, width = '', height = '', svg }) => {
  return (
    <>
      <ButtonStyled width={width} height={height} type={type}>
        {textButton}
        {svg}
      </ButtonStyled>
    </>
  );
};
