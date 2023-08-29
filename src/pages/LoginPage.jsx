import React from 'react';

import LoginForm  from 'components/LoginForm/LoginForm';
import {
    Container,
    FormWrapper,
    ImgWrapper,
    StyledLink,
} from '../components/LoginForm/LoginPage.styled';

const LoginPage = () => {
  return (
    <Container>
      <FormWrapper>
        <LoginForm />
        <StyledLink to="/register">Sign up</StyledLink>
      </FormWrapper>


      <ImgWrapper />
    </Container>
  );
};

export default LoginPage;