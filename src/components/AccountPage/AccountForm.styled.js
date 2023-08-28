import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';
import { primaryColor, whiteColor } from '../../utils/variables';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  margin: 18px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  & input {
    min-width: 300px;
    padding: 12px 14px;
    border-radius: 8px;
    border: 1px solid;
    border-color: ${props => props.valid ? '#3CBC81' : props.error ? '#DA1414' : 'rgba(17, 17, 17, 0.15);'};
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
    color: ${props => props.valid ? '#3CBC81' : props.error ? '#DA1414' : 'initial'};
  }
`;

export const AccountSaveButton = styled.button`
  cursor: pointer;
  padding: 14px 50px;
  border-width: 0;
  border-radius: 16px;
  background-color: ${primaryColor};
  color: ${whiteColor};
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  margin-top: 22px;
  align-self: center;
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  margin-left: 18px;
  font-family: Inter;
  font-size: 14px;
  line-height: calc(14 / 12);
  color: #da1414;
`;
