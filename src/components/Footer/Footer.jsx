import React from 'react';

// import Modal from 'components/modal/Modal';
import AboutTeamModal from 'components/AboutTeamModal/AboutTeamModal';
import { useState } from 'react';
import { FooterStyled, TeamName } from './Footer.styled';

const Footer = () => {
  const [isOpenedModal, setIsOpenedModal] = useState(false);

  const handleToggle = () => {
    setIsOpenedModal(prevState => !prevState);
  };
  return (
    <>
      <FooterStyled>
        <p>© 2023 | All Rights Reserved |</p>
        &nbsp;Developed by
        <TeamName onClick={handleToggle}>"Name Team"</TeamName>
      </FooterStyled>
      {isOpenedModal && <AboutTeamModal handleToggle={handleToggle} />}
    </>
  );
};

export default Footer;
