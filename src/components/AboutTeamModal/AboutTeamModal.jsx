import React from 'react';

// стилізовані компоненти
import {
  Backdrop,
  ModalContainer,
  CloseButton,
  Title,
  ModalTeamContainer,
  ModalTeamItem,
} from './AboutTeamModal.styled';

// іконки
import CloseIco from '../../images/svg/x-close.svg';

// обʼєкт про команду
import { teamInfo } from './teamInfo';

// портал
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');

const AboutTeamModal = ({ handleToggle }) => {
  // при натисканні кнопки закриття
  const backdropClick = e => {
    console.log('e.currentTarget', e.currentTarget);
    console.log('e.target', e.target);
    if (e.currentTarget === e.target) {
      handleToggle();
    }
  };

  return createPortal(
    <Backdrop onClick={backdropClick}>
      <ModalContainer>
        <CloseButton onClick={handleToggle}>
          <img src={CloseIco} alt="close menu" width="100%" />
        </CloseButton>
        <Title>Hello</Title>
        <ModalTeamContainer>
          {teamInfo.map(teamInfo => {
            return <ModalTeamItem></ModalTeamItem>;
          })}
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
