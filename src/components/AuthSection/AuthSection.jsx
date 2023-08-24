import {
  AuthSectionBlock,
  AuthSectionContainer,
  Img,
} from './AuthSection.styled';
// import { Container } from '../App/App.styled';

import GooseSVG from '../../images/goose-main.svg';

const AuthSection = () => {
  return (
    <AuthSectionBlock>
      <AuthSectionContainer>
        <Img src={GooseSVG} />
        <p>GooseTrack</p>
        <button type="button">Log in </button>
        <button type="button">Sign up</button>
      </AuthSectionContainer>
    </AuthSectionBlock>
  );
};

export default AuthSection;
