import { Container } from '../App/App.styled';
import {
  MessageBlock,
  ErrImgContainer,
  Text4FromImg,
  InformationMessage,
  LinkToMain,
} from './Msg404.styled';

import ErrGooseImage from '../../images/NotFoundPage/mobile_error.png';

const Msg404 = () => {
  return (
    <main>
      <Container>
        <MessageBlock>
          <ErrImgContainer>
            <Text4FromImg>4</Text4FromImg>
            <img src={ErrGooseImage} alt="error page" />
            <Text4FromImg>4</Text4FromImg>
          </ErrImgContainer>

          <InformationMessage>
            We’re sorry, the page you requested could not be found. Please go
            back to the homepage.
          </InformationMessage>
          <LinkToMain to="/">Back to home</LinkToMain>
        </MessageBlock>
      </Container>
    </main>
  );
};

export default Msg404;
