import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';

import {
  Main,
  Container,
  MainContent,
  TopMenu,
  TopMenuLeftPart,
  BurgerMenuButton,
  BurgerMenuButtonIco,
} from './SharedLayout.styled';

import BurgerMenuIce from '../../images/svg/menu.svg';

import UserInfo from './UserInfo/UserInfo';
import ChangeHeadingName from './ChangeHeadingName/ChangeHeadingName';
import SiteNav from './SiteNav/SiteNav';
import SiteNavMobile from './SiteNav/SiteNavMobile';

const SharedLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggle = () => {
    setIsMenuOpen(pS => !pS);
  };
  return (
    //  MAIN BLOCK FOR BG COLOR AND CONTAINER FOR WIDTH AND CENTERED
    <Main>
      <Container>
        {/* LEFT MENU BAR ONLY FOR DESKTOP. Visible only on desktop */}
        <SiteNav />

        {/* MENU BAR ONLY FOR MOBILE AND TABLET. visible on mob &tabl and when isMenuOpen */}
        {isMenuOpen && <SiteNavMobile handleToggle={handleToggle} />}

        {/* MAIN CONTANT (TOP MENU + OUTLET) */}
        <MainContent>
          {/* TOP MENU FOR ALL */}
          <TopMenu>
            <TopMenuLeftPart>
              <BurgerMenuButton type="button" onClick={handleToggle}>
                <BurgerMenuButtonIco
                  src={BurgerMenuIce}
                  alt="open menu"
                  width="100%"
                />
              </BurgerMenuButton>
              <ChangeHeadingName />
            </TopMenuLeftPart>
            <UserInfo />
          </TopMenu>

          {/* MAIN CONTENT OUTLET */}
          <Outlet />
        </MainContent>
      </Container>
    </Main>
  );
};

export default SharedLayout;
