import { Link } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import { MainStyled, StyledLink } from './SignUp.styled';

const SignUp = () => {
  return (
    <MainStyled>
      <RegisterForm />
      <StyledLink to="/login">Log In</StyledLink>
    </MainStyled>
  );
};

export default SignUp;
