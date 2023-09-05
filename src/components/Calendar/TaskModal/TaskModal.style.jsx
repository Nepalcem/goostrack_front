import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

// Бібліотека формік
import { Field } from 'formik';

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
  max-width: 303px;
  padding: 10px;
  border-radius: 8px;

  padding: 48px 18px;
  background-color: var(--color-bgr-popup);
  color: var(--color-title-popup);
  border: 1px solid rgba(220, 227, 229, 0.8);
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  position: absolute;

  @media screen and (min-width: 768px) {
    padding: 40px 28px;
    max-width: 396px;
    width: 396px;
  }
`;
export const Label = styled.label`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 18px;
  color: var(--color-title-popup);
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
    opacity: 0.8;
  }

  @media screen and (min-width: 768px) {
  }
`;

export const CloseButtonIco = styled(ReactSVG)`
  width: 100%;
  height: 100%;

  stroke: var(--color-close-popup);
`;

export const StyledFormikInput = styled(Field)`
  margin-top: 8px;
  height: 46px;
  left: 0px;
  top: 0px;
  background-color: var(--color-bgr-input);
  // background-color: transparent;
  border-radius: 8px;
  border: var(--color-user-input-border);
  padding-left: 18px;
  color: var(--color-text-input);

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;

  &::-webkit-calendar-picker-indicator {
    cursor: pointer;

  &:hover {
  opacity: 0.8;
}
  }
  // &::-webkit-calendar-picker-indicator {
  //   display: none;
  // }
`;

export const TimeBlock = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 14px;
  margin: 0;
`;

export const BlockButton = styled.div`
  display: flex;
  gap: 8px;
`;

export const EditButton = styled.button`
  display: flex;
  gap: 8px;
  // flex-direction: row;
  justify-content: center;
  align-items: center;
  // padding: 10px 20px 10px 20px;
  // width: 100%;
  width: 178px;
  height: 48px;

  background: #3e85f3;
  border-radius: 8px;
  border: none;

  color: white;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
export const CancelButton = styled(EditButton)`
  background: #efefef;
  color: #111111;
  width: 144px;
  height: 48px;

  &:hover {
    opacity: 0.8;
  }
`;

export const AddTasks = styled(ReactSVG)`
  width: 20px;
  height: 20px;
  stroke: white;
`;

export const RadioBlock = styled.div`
  margin-top: 10px;
  margin-bottom: 32px;
  display: flex;
  gap: 16px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
`;

export const RadioInputBlue = styled(Field)`
  margin-right: 6px;
  appearance: none;
  width: 10px;
  height: 10px;
  outline: none;
  position: relative;
  border-radius: 50%;
  background-color: #72c2f8;

  :checked {
    outline: 3px solid rgba(114, 194, 248, 0.5);
  }
`;

export const RadioInputYellow = styled(Field)`
  margin-right: 6px;
  appearance: none;
  width: 10px;
  height: 10px;
  outline: none;
  position: relative;
  border-radius: 50%;
  background-color: #f3b249;
  :checked {
    outline: 3px solid rgba(243, 178, 73, 0.5);
  }
`;

export const RadioInputRed = styled(Field)`
  margin-right: 6px;
  appearance: none;
  width: 10px;
  height: 10px;
  outline: none;
  position: relative;
  border-radius: 50%;
  background-color: #ea3d65;

  :checked {
    outline: 3px solid rgba(234, 61, 101, 0.5);
  }
`;
