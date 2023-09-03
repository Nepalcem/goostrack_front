import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

// Бібліотека формік
import { Formik, Form, Field } from 'formik';

// Бекдроп
export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: transparent;
  /* background-color: rgba(0, 0, 0, 0.3); */
  z-index: 2000;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// Модальне вікно Створення таски
export const ModalContainer = styled.div`
  width: 303px;

  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);

  padding: 48px 18px 40px 18px;

  /* background-color: white; */

  position: absolute;
  /* top: 50%; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */

  /* width: 100%; */
  /* max-width: 335px; */

  /* min-height: 225px; */
  /* max-height: 80%; */

  /* padding: 30px 20px 20px 20px; */

  /* border-radius: 8px; */
  /* border: 1px solid rgba(220, 227, 229, 0.8); */
  /* box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05); */
  /* overflow: scroll; */
  /* background: radial-gradient(#ffffff, #3e85f3); */

  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */

  @media screen and (min-width: 768px) {
    width: 396px;
    padding: 40px 28px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const CloseButton = styled.button`
  padding: 0;
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: none;
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;

  &:hover {
  }

  @media screen and (min-width: 768px) {
  }
`;

export const CloseButtonIco = styled(ReactSVG)`
  width: 100%;
  height: 100%;

  stroke: black;
`;

export const StyledFormikInput = styled(Field)`
  border-radius: 8px;
  background: #f6f6f6;

  padding: 14px 18px;

  border: none;
`;

export const TimeBlock = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 14px;
`;
