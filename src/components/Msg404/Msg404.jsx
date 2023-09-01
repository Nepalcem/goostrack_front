import { Container } from '../App/App.styled';
import {
  MessageBlock,
  ErrImgContainer,
  Text4FromImg,
  InformationMessage,
  LinkToMain,
} from './Msg404.styled';

import ErrGooseImageMobile from '../../images/NotFoundPage/mobile_error.png';
import ErrGooseImageMobile_2x from '../../images/NotFoundPage/mobile_error@2x.png';

import ErrGooseImageTablet from '../../images/NotFoundPage/tablet_error.png';
import ErrGooseImageTablet_2x from '../../images/NotFoundPage/tablet_error@2x.png';

import ErrGooseImageDesktop from '../../images/NotFoundPage/disktop_error.png';
import ErrGooseImageDesktop_2x from '../../images/NotFoundPage/disktop_error@2x.png';

const Msg404 = () => {
  return (
    <main>
      <Container>
        <MessageBlock>
          <ErrImgContainer>
            <Text4FromImg>4</Text4FromImg>
            <picture>
              <source
                srcSet={`${ErrGooseImageDesktop}    1x,
                    ${ErrGooseImageDesktop_2x}  2x`}
                media="(min-width: 1440px)"
              />
              <source
                srcSet={`${ErrGooseImageMobile}    1x,
                    ${ErrGooseImageMobile_2x}  2x`}
                media="(max-width: 767px)"
              />
              <source
                srcSet={`${ErrGooseImageTablet}    1x,
                    ${ErrGooseImageTablet_2x}  2x`}
                media="(min-width: 768px)"
              />

              <img src={ErrGooseImageMobile} alt="error page" />
            </picture>

            {/* <img src={ErrGooseImageMobile} alt="error page" /> */}
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
