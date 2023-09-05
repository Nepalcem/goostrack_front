import styled from 'styled-components';

import {
  Field as FormikField,
  ErrorMessage as FormikErrorMessage,
} from 'formik';

import { ReactSVG } from 'react-svg';
import {
  blackcolor,
  lightBlueColor,
  primaryColor,
  whiteColor,
} from 'utils/variables';

export const SignUpIcon = styled(ReactSVG)`
  stroke: white;
  width: 18px;
  height: 18px;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const FormContainer = styled.div`
  width: 335px;
  padding: 40px 24px;

  background-color: ${whiteColor};
  border-radius: 8px;

  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    width: 480px;
    padding: 40px;
    margin-bottom: 24px;
  }
`;

export const FormTitle = styled.h1`
  color: ${primaryColor};
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.33333;

  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
    margin-bottom: 40px;
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 24px;
  position: relative;
  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
  }
`;

export const Label = styled.label`
  display: block;
  color: ${blackcolor};
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  &.is-valid {
    color: #3cbc81;
  }
  &.is-invalid {
    color: #FF0000;
  }
`;

export const Field = styled(FormikField)`
  width: 100%;
  /* height: 46px; */
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.6);
  background: ${whiteColor};
  padding: 14px;
  outline: none;

  color: ${blackcolor};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28571;

  &::placeholder {
    color: ${lightBlueColor};
  }

  @media screen and (min-width: 768px) {
    padding: 18px;
    font-size: 16px;
    line-height: 1.125;
  }

  &.is-valid {
    border-radius: 8px;
    border: 1px solid rgb(60, 188, 129);
  }

  &.is-invalid {
    border-radius: 8px;
    border: 1px solid rgb(231, 74, 59);
  }
`;
export const TextShow = styled.span`
  // display: flex;
  color: #3e85f3;
  cursor: pointer;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  position: absolute;
  top: 43px;

  right: 20px;

  &:hover,
  &:focus {
    opacity: 0.8;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  margin-left: 18px;
  margin-top: 8px;

  color: #FF0000;
`;

