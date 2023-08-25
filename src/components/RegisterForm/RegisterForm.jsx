import React from 'react';

// Стилізовані компоненти
import {
  FormContainer,
  FormTitle,
  InputContainer,
  Label,
  Input,
  SignUpIcon,
} from './RegisterForm.styled';
import SignUpSVG from '../../images/svg/log-in.svg';

// Бібліотека формік
import { Formik, Form, ErrorMessage } from 'formik';

// Бібліотека валідації форми yup
import * as yup from 'yup';
import { Button } from 'components/Button/Button';

// Схма валідації форми!!!!!!
// ПЕРЕВІРИТИ ШОБ ЗБІГАЛАСЬ З БЕКЕНДОМ
// https://www.npmjs.com/package/yup
const schema = yup.object().shape({
  name: yup.string().required().min(4).max(30),
  email: yup
    .string()
    .email()
    .matches(
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
      'Email must contain only Latin characters'
    )
    .required(),
  password: yup.string().required().matches().min(8),
});

//  Компонент форми
const RegisterForm = () => {
  // початкові значення полів форми
  const initialValues = { name: '', email: '', password: '' };

  // Обробник сабміту
  const handleSubmit = (values, actions) => {
    // у обʼєкт values повертаються дані з форми
    // тут буде проходити реєстрація
    actions.resetForm();
  };

  return (
    <FormContainer>
      <FormTitle>Sign Up</FormTitle>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form autoComplete="off">
          <InputContainer>
            <Label htmlFor="name">Name</Label>
            <Input type="text" name="name" placeholder="Enter your name" />
            <ErrorMessage name="name" />
          </InputContainer>

          <InputContainer>
            <Label htmlFor="email">Email </Label>
            <Input type="text" name="email" placeholder="Enter email" />
            <ErrorMessage name="email" />
          </InputContainer>

          <InputContainer>
            <Label htmlFor="name">Password </Label>
            <Input
              type="password"
              name="password"
              placeholder="Enter password"
            />
            <ErrorMessage name="password" />
          </InputContainer>

          <Button
            textButton="Sign Up"
            type="submit"
            svg={<SignUpIcon src={SignUpSVG} />}
          ></Button>
        </Form>
      </Formik>
    </FormContainer>
  );
};

export default RegisterForm;
