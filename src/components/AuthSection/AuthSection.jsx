import {
  AuthSectionBlock,
  AuthSectionContainer,
  Img,
  HeroText,
  LoginIco,
  AuthWrapper,
  LoginLink,
  SignUpLink,
} from './AuthSection.styled';

import LoginSVG from '../../images/svg/log-in.svg';
import GooseSVG from '../../images/svg/goose-main.svg';

const AuthSection = () => {
  return (
    <AuthSectionBlock>
      <AuthSectionContainer>
        <Img src={GooseSVG} />
        <HeroText>Goosendar</HeroText>
        <AuthWrapper>
          <SignUpLink to="/register">Sign up</SignUpLink>

          <LoginLink to="/login">
            Log in
            <LoginIco src={LoginSVG} />
          </LoginLink>
        </AuthWrapper>
      </AuthSectionContainer>
    </AuthSectionBlock>
  );
};

export default AuthSection;
