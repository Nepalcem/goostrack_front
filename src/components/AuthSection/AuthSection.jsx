import {
  AuthSectionBlock,
  AuthSectionContainer,
  Img,
  HeroText,
} from './AuthSection.styled';
// import { Container } from '../App/App.styled';

import GooseSVG from '../../images/goose-main.svg';
import { Link } from 'react-router-dom';

const AuthSection = () => {
  return (
    <AuthSectionBlock>
      <AuthSectionContainer>
        <Img src={GooseSVG} />
        <HeroText>GooseTrack</HeroText>
        <Link to="/login">Log in </Link>
        <Link to="/register">Sign up</Link>
      </AuthSectionContainer>
    </AuthSectionBlock>
  );
};

export default AuthSection;
