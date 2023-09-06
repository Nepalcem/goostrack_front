import React from 'react';

// стилізовані компоненти
import {
  Backdrop,
  ModalContainer,
  CloseButton,
  CloseButtonIco,
  Title,
  ModalTeamContainer,
  ModalTeamItem,
  ImgThumb,
  Img,
  Name,
  Position,
  SocialList,
  SocialMediaLink,
  SocialMediaIco,
} from './AboutTeamModal.styled';

// іконки
import CloseIco from '../../images/svg/x-close.svg';
import ghIco from '../../images/svg/github.svg';
import ldIco from '../../images/svg/linkedin.svg';

// обʼєкт про команду
import { teamInfo } from './teamInfo';

// портал
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');

const AboutTeamModal = ({ handleToggle }) => {
  // при натисканні кнопки закриття
  const backdropClick = e => {
    if (e.currentTarget === e.target) {
      handleToggle();
    }
  };

  return createPortal(
    <Backdrop onClick={backdropClick}>
      <ModalContainer>
        <CloseButton onClick={handleToggle}>
          <CloseButtonIco src={CloseIco} alt="close menu" width="100%" />
        </CloseButton>
        <Title>Developers Team</Title>
        <ModalTeamContainer>
          {teamInfo.map(
            ({ nameDev, position, photo170x1, photo170x2, ldLink, ghLink }) => {
              return (
                <ModalTeamItem>
                  <ImgThumb>
                    <picture>
                      <source
                        srcSet={`${photo170x1}    1x,
                    ${photo170x2}  2x`}
                      />
                      <Img src={photo170x1} alt={nameDev} />
                    </picture>
                  </ImgThumb>
                  <Name>{nameDev}</Name>
                  <Position>{position}</Position>
                  <SocialList>
                    <SocialMediaLink
                      href={ldLink}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Linkedin"
                    >
                      <SocialMediaIco src={ldIco} />
                    </SocialMediaLink>
                    <SocialMediaLink
                      href={ghLink}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="GitHub"
                    >
                      <SocialMediaIco src={ghIco} />
                    </SocialMediaLink>
                  </SocialList>
                </ModalTeamItem>
              );
            }
          )}
        </ModalTeamContainer>
      </ModalContainer>
    </Backdrop>,
    modalRoot
  );
};

export default AboutTeamModal;

//  <h2>About our team</h2>
//   <div>
//     <div>
//       <h3>Team-Lead</h3>
//       <p>Mark Wood</p>
//     </div>
//     <div>
//       <h3>Developer</h3>
//       <p>Oleksandr Hrynenko</p>
//     </div>
//     <div>
//       <h3>Developer</h3>
//       <p>Oleksandr Khomiak</p>
//     </div>
//     <div>
//       <h3>Developer</h3>
//       <p>Iryna Bigdash</p>
//     </div>
//     <div>
//       <h3>Developer</h3>
//       <p>Daniil Mikhnievych</p>
//     </div>
//     <div>
//       <h3>Developer</h3>
//       <p>Nataliia Dyrkach</p>
//     </div>
//     <div>
//       <h3>Developer</h3>
//       <p>Denys Abramets</p>
//     </div>
//     <div>
//       <h3>Developer</h3>
//       <p>Roksolana</p>
//     </div>
//     <div>
//       <h3>Developer</h3>
//       <p>Roman Tkachuk</p>
//     </div>
//     <div>
//       <h3>Developer</h3>
//       <p>Oleksandr Siukov</p>
//     </div>
//     <div>
//       <h3>Developer</h3>
//       <p>Ruslan Zorkin</p>
//     </div>
//   </div>
