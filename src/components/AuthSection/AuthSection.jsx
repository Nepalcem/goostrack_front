import { AuthSectionBlock, AuthSectionContainer } from './AuthSection.styled';
// import { Container } from '../App/App.styled';

import GooseSVG from '../../images/goose-main.svg';

const AuthSection = () => {
  return (
    <AuthSectionBlock>
      <AuthSectionContainer>
        <img src={GooseSVG} />
        <p>GooseTrack</p>
      </AuthSectionContainer>
    </AuthSectionBlock>
  );
};

export default AuthSection;
