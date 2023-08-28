import React, { useState } from 'react';
// Стилізовані компоненти
import {
  ErrorMessage,
  FormContainer,
  FormTitle,
  InputContainer,
  Label,
  Field,
  Button,
  TextShow,
} from './LoginForm.styled';

// Бібліотека формік
import { Formik, Form } from 'formik';

// Бібліотека валідації форми yup
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';

// Схма валідації форми!!!!!!
// ПЕРЕВІРИТИ ШОБ ЗБІГАЛАСЬ З БЕКЕНДОМ
// https://www.npmjs.com/package/yup
const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .matches(
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
      'Email must contain only Latin characters'
    )
    .required(),
  password: yup
    .string()
    .required()
    .matches(
      /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
      'Password requires min 8 characters long, one UPPERCASE, one lowercase letter'
    )
    .min(8),
});

//  Компонент форми
const LoginForm = () => {
  // початкові значення полів форми

  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch();

  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  // Обробник сабміту
  const handleSubmit = (values, actions) => {
    dispatch(authOperations.logIn(values));
    // у обʼєкт values повертаються дані з форми
    console.log('values', values);
    // тут буде проходити реєстрація
    // actions.resetForm();
  };

  return (
    <FormContainer>
      <FormTitle>Log In</FormTitle>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ errors, touched }) => {
          const isValid = field =>
            touched[field] && errors[field]
              ? 'is-invalid'
              : touched[field]
              ? 'is-valid'
              : '';
          return (
            <Form autoComplete="off">
              <InputContainer>
                <Label htmlFor="email" className={isValid('email')}>
                  Email
                </Label>

                <Field
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className={isValid('email')}
                />

                <ErrorMessage name="email" component="div" />
              </InputContainer>

              <InputContainer>
                <Label htmlFor="name" className={isValid('password')}>
                  Password
                </Label>

                <Field
                  // type="password"
                  name="password"
                  placeholder="Enter password"
                  type={passwordShown ? 'text' : 'password'}
                  className={isValid('password')}
                />

                <TextShow type="submit" onClick={togglePassword}>
                  {passwordShown ? 'Hide' : 'Show'}
                </TextShow>

                <ErrorMessage name="password" component="div" />
              </InputContainer>

              <Button
                type="submit"
                // disabled={!isValid}
              >
                Log In
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
          );
        }}
      </Formik>
    </FormContainer>
  );
};

export default LoginForm;
