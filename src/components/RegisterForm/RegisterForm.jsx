import React from 'react';

// Стилізовані компоненти
import {
  FormContainer,
  FormTitle,
  InputContainer,
  Label,
  Input,
  Button,
} from './RegisterForm.styled';

// Бібліотека формік
import { Formik, Form, ErrorMessage } from 'formik';

// Бібліотека валідації форми yup
import * as yup from 'yup';

// Схма валідації форми!!!!!!
// ПЕРЕВІРИТИ ШОБ ЗБІГАЛАСЬ З БЕКЕНДОМ
// https://www.npmjs.com/package/yup
const schema = yup.object().shape({
  name: yup.string().required().min(4).max(30),
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
});

//  Компонент форми
const RegisterForm = () => {
  // початкові значення полів форми
  const initialValues = { name: '', email: '', password: '' };

  // Обробник сабміту
  const handleSubmit = (values, actions) => {
    // у обʼєкт values повертаються дані з форми
    console.log('values', values);
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

          <Button type="submit">
            Sign Up
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M12.5 2.5H13.5C14.9001 2.5 15.6002 2.5 16.135 2.77248C16.6054 3.01217 16.9878 3.39462 17.2275 3.86502C17.5 4.3998 17.5 5.09987 17.5 6.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H12.5M8.33333 5.83333L12.5 10M12.5 10L8.33333 14.1667M12.5 10L2.5 10"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </Form>
      </Formik>
    </FormContainer>
  );
};

export default RegisterForm;
