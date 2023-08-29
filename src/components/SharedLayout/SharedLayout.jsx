import { Outlet } from 'react-router-dom';
// import React, { useState } from 'react';

import {
  Main,
  Container,
  MainContent,
  TopMenu,
  TopMenuLeftPart,
  BurgerMenuButton,
} from './SharedLayout.styled';

import BurgerMenuIce from '../../images/svg/menu.svg';

import UserInfo from './UserInfo/UserInfo';
import ChangeHeadingName from './ChangeHeadingName/ChangeHeadingName';
import SiteNav from './SiteNav/SiteNav';

const SharedLayout = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggle = () => {
    // setIsMenuOpen(pS => !pS)
  };
  return (
    <Main>
      <Container>
        {/* LEFT MENU BAR ONLY FOR DESKTOP!!!!!!!!!! */}
        <SiteNav />

        {/* MENU BAR ONLY FOR MOBILE AND TABLET !!!!!!!!!! */}
        {/* ТУТ ПРОПИСАТИ ВИПАДНЕ МЕНЮ!!!!!! */}

        {/* MAIN CONTAINER */}

        <MainContent>
          <TopMenu>
            {/* TOP MENU FOR ALL !!!!!!!!!! */}

            <TopMenuLeftPart>
              <BurgerMenuButton type="button" onClick={handleToggle}>
                <img src={BurgerMenuIce} alt="open menu" width="100%" />
              </BurgerMenuButton>
              <ChangeHeadingName />
            </TopMenuLeftPart>

            <UserInfo />
          </TopMenu>

          <Outlet />
        </MainContent>
      </Container>
    </Main>
  );
};

export default SharedLayout;
