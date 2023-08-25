import { Link } from 'react-router-dom';
import {
  AuthSectionBlock,
  AuthSectionContainer,
  Img,
  HeroText,
  LoginIco,
} from './AuthSection.styled';
// import { Container } from '../App/App.styled';
import LoginSVG from '../../images/svg/log-in.svg';
import GooseSVG from '../../images/goose-main.svg';

const AuthSection = () => {
  return (
    <AuthSectionBlock>
      <AuthSectionContainer>
        <Img src={GooseSVG} />
        <HeroText>GooseTrack</HeroText>
        <Link to="/login">
          Log in
          <LoginIco src={LoginSVG} />
        </Link>
        <Link to="/register">Sign up</Link>
      </AuthSectionContainer>
    </AuthSectionBlock>
  );
};

export default AuthSection;
