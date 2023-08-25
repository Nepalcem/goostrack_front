import { Outlet } from 'react-router-dom';
import React from 'react';

import {
  Main,
  Container,
  LeftDesktopMenu,
  MainContent,
  TopMenuLeftPart,
  TopMenu,
  BurgerMenuButton,
  Heading,
  ProfInfoWrap,
  FeedbackButton,
  ThemeToggleButton,
  NameField,
  AvatarThumb,
  Avatar,
  LogoBlock,
  LogoImg,
  LogoText,
  LeftMenuTitle,
  LeftMenuItemIco,
  LeftMenuItemLink,
  LeftMenuItemText,
  LeftMenuLogOutButton,
  LogOutIcoEl,
} from './SharedLayout.styled';

import BurgerMenuIce from '../../images/burger-menu-01.svg';
import ThemeIcoButton from '../../images/theme-ico-button-moon.svg';
import UserAvatar from '../../images/user-avatar.png';

import LogoGoose from '../../images/logo-goose-left-menu.png';

import AccountIco from '../../images/user-check-01.svg';
import CalendarIco from '../../images/calendar-check-02.svg';
import StatisticsIco from '../../images/chart.svg';

import LogOutIco from '../../images/log-out-01.svg';

const SharedLayout = () => {
  return (
    <Main>
      <Container>
        {/* LEFT-CONTENT */}
        <LeftDesktopMenu>
          <LogoBlock>
            <LogoImg src={LogoGoose} alt="logo goose" />
            <LogoText>GooseTrack</LogoText>
          </LogoBlock>
          <LeftMenuTitle>User Panel</LeftMenuTitle>

          <LeftMenuItemLink to="/account">
            <LeftMenuItemIco src={AccountIco} />
            <LeftMenuItemText>My account</LeftMenuItemText>
          </LeftMenuItemLink>

          <LeftMenuItemLink to="/calendar">
            <LeftMenuItemIco src={CalendarIco} />
            <LeftMenuItemText>Calendar</LeftMenuItemText>
          </LeftMenuItemLink>

          <LeftMenuItemLink to="/statistics">
            <LeftMenuItemIco src={StatisticsIco} />
            <LeftMenuItemText>Statistics</LeftMenuItemText>
          </LeftMenuItemLink>

          <LeftMenuLogOutButton>
            Log out
            <LogOutIcoEl src={LogOutIco} alt="logout button" />
          </LeftMenuLogOutButton>
        </LeftDesktopMenu>
        {/* RIGHT-CONTENT */}
        <MainContent>
          <TopMenu>
            <TopMenuLeftPart>
              <BurgerMenuButton type="button">
                <img src={BurgerMenuIce} alt="open menu" width="100%" />
              </BurgerMenuButton>

              <Heading>Calendar</Heading>
            </TopMenuLeftPart>

            <ProfInfoWrap>
              <FeedbackButton type="button">Feedback</FeedbackButton>
              <ThemeToggleButton type="button">
                <img src={ThemeIcoButton} alt="change theme" width="100%" />
              </ThemeToggleButton>
              <NameField>Nadiia</NameField>
              <AvatarThumb>
                <Avatar src={UserAvatar} alt="user avatar" />
              </AvatarThumb>
            </ProfInfoWrap>
          </TopMenu>

          <Outlet />
        </MainContent>
      </Container>
    </Main>
  );
};

export default SharedLayout;
