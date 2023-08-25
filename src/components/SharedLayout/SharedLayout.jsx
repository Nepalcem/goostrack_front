import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';

import {
  Main,
  Container,
  MainContent,
  TopMenu,
  BurgerSide,
} from './SharedLayout.styled';

import SiteNav from './SiteNav/SiteNav';
import UserInfo from './UserInfo/UserInfo';
import Header from './Header/Header';
import BurgerMenuIce from '../../images/burger-menu-01.svg';
import { BurgerMenuButton } from './Header/Header.styled';

const SharedLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggle = () => setIsMenuOpen(pS => !pS);
  return (
    <Main>
      <Container>
        <BurgerSide data={isMenuOpen ? 'true' : undefined}>
          <SiteNav onClose={handleToggle} isOpen={isMenuOpen} />
        </BurgerSide>
        <MainContent>
          <TopMenu>
            {isMenuOpen ? (
              null
            ) : (
              <BurgerMenuButton type="button" onClick={handleToggle}>
                <img src={BurgerMenuIce} alt="open menu" width="100%" />
              </BurgerMenuButton>
            )}
            <Header />
            <UserInfo />
          </TopMenu>

          <Outlet />
        </MainContent>
      </Container>
    </Main>
  );
};

export default SharedLayout;
