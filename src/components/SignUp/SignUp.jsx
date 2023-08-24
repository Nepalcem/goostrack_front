import { Link } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import { MainStyled } from './SignUp.styled';

const SignUp = () => {
  return (
    <MainStyled>
      <RegisterForm />
      <Link to="/login">Log In</Link>
    </MainStyled>
  );
};

export default SignUp;
