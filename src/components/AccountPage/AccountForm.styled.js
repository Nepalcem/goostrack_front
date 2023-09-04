import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';
import { primaryColor, whiteColor } from '../../utils/variables';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1440px) {
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    //centering submit button on desktop
    .spacer {
      min-width: 354px;
    }
    /* &:last-child {
      margin-top: 88px;
    } */
  }
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    .spacer {
      display: none;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
  }

  align-items: center;
  @media screen and (min-width: 768px) {
    gap: 40px;
  }
  margin: 18px;
`;

export const FormTextInputs = styled.div`
  @media screen and (min-width: 1024px) {
    width: 100%;
  }
  label {
    margin-top: 18px;
  }
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    & > :not(:last-child) {
      margin-right: 50px;
    }
  }
  align-items: center;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  & input {
    min-width: 300px;
    @media screen and (min-width: 768px) {
      min-width: 354px;
      height: 46px;
    }
    padding: 12px 14px;
    border-radius: 8px;
    background-color: var(--color-btn-change-day);
    color: var(--color-name-user);
    border: 1px solid;
    border-color: ${props =>
      props.valid
        ? '#3CBC81'
        : props.error
        ? '#DA1414'
        : 'var(--color-border-profil);'};
    font-family: Inter;
    font-weight: 600;
    font-size: 14px;
    line-height: calc(18 / 14);
    outline: none;
  }
  & input:focus {
    border: 1px solid #111111;
  }

  & input.error {
    border-color: #da1414;
  }
  & label {
    font-size: 12px;
    line-height: calc(14 / 12);
    font-family: Inter;
    color: ${props =>
      props.valid
        ? '#3CBC81'
        : props.error
        ? '#DA1414'
        : 'var(--color-title-profil)'};
  }
`;

export const AccountSaveButton = styled.button`
  cursor: pointer;
  width: 195px;
  padding: 14px 50px;
  @media screen and (min-width: 768px) {
    padding: 15px 83px;
    width: 262px;
    margin-top: 40px;
  }
  border-width: 0;
  border-radius: 16px;
  background-color: ${primaryColor};
  color: ${whiteColor};
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  margin-top: 22px;
  @media screen and (min-width: 1024px) {
    margin-top: 88px;
  }
  /* align-self: center; */
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  margin-left: 18px;
  font-family: Inter;
  font-size: 14px;
  line-height: calc(14 / 12);
  color: #da1414;
`;
