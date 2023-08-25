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
} from './SharedLayout.styled';

import BurgerMenuIce from '../../images/burger-menu-01.svg';
import ThemeIcoButton from '../../images/then-ico-button-moon.svg';
import UserAvatar from '../../images/user-avatar.png';

import LogoGoose from '../../images/logo-goose-left-menu.png';

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
