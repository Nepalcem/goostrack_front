import { Container } from '../App/App.styled';
import { MessageBlock, InformationMessage, LinkToMain } from './Msg404.styled';

const Msg404 = () => {
  return (
    <main>
      <Container>
        <MessageBlock>
          <p>Тут має бути картинка 404!!!</p>
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
