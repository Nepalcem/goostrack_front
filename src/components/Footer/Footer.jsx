import React from 'react';

// import Modal from 'components/modal/Modal';

import { FooterStyled, TeamName  } from './Footer.styled';

const Footer = () => {

  return (
    <>
      <FooterStyled>
        <p>© 2023 | All Rights Reserved |</p>
        &nbsp;Developed by
        <TeamName >"Name Team"</TeamName>
      </FooterStyled>

        {/* <Modal onClose={}></Modal> */}

    </>
  );
};

export default Footer;