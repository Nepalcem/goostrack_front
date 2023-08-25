import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';

import {
  Main,
  Container,
  MainContent,
  TopMenu,
  BurgerSide,
} from './SharedLayout.styled';


import BurgerMenuIce from '../../images/svg/menu.svg';
import ThemeIcoButton from '../../images/svg/moon.svg';
import UserAvatar from '../../images/svg/photo-user.svg';

import LogoGoose from '../../images/logo-goose-left-menu.png';

import AccountIco from '../../images/svg/user.svg';
import CalendarIco from '../../images/svg/calendar.svg';
import StatisticsIco from '../../images/svg/chart.svg';

import LogOutIco from '../../images/svg/log-out.svg';

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
