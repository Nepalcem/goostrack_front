import React from 'react';

import  RegisterForm  from 'components/RegisterForm/RegisterForm';
import {
  Container,
  FormWrapper,
  ImgWrapper,
  StyledLink,
} from '../components/RegisterForm/RegisterPage.styled';

const RegisterPage = () => {
  return (
    <Container>
      <FormWrapper>
        <RegisterForm />
        <StyledLink to="/login">Log In</StyledLink>
      </FormWrapper>

      <ImgWrapper />
    </Container>
  );
};

export default RegisterPage;