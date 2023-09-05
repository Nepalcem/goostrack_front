import React from 'react';

// import Modal from 'components/modal/Modal';
import AboutTeamModal from 'components/AboutTeamModal/AboutTeamModal';
import { useState } from 'react';
import { FooterStyled, TeamName } from './Footer.styled';

const body = document.querySelector('body');

const Footer = () => {
  const [isOpenedModal, setIsOpenedModal] = useState(false);

  const handleToggle = () => {
    setIsOpenedModal(prevState => !prevState);
    if (isOpenedModal === true) {
      body.style.overflow = 'scroll';
    }
    if (isOpenedModal === false) {
      body.style.overflow = 'hidden';
    }
  };
  return (
    <>
      <FooterStyled>
        <p>© 2023 | All Rights Reserved |</p>
        &nbsp;Developed by
        <TeamName onClick={handleToggle}>"Code Tamers"</TeamName>
      </FooterStyled>
      {isOpenedModal && <AboutTeamModal handleToggle={handleToggle} />}
    </>
  );
};

export default Footer;
