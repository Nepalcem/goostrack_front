/* eslint-disable jsx-a11y/anchor-is-valid */
import { Outlet } from 'react-router-dom';
import React from 'react';
import Sitenav from './SiteNav/SiteNav';
import Header from './Header/Header';
import {
  RootWrapperMain,
  SideButton,
  WrapperHeader,
  WrapperMain,
  WrapperPageContent,
  WrapperSideBarContent,
} from './SharedLayout.styled';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const SharedLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggle = () => setIsMenuOpen(pS => !pS);
  return (
    <>
      <RootWrapperMain>
        <WrapperMain>
          <WrapperSideBarContent data={isMenuOpen ? 'true' : undefined}>
            <Sitenav onClose={handleToggle} isOpen={isMenuOpen} />
          </WrapperSideBarContent>
          <WrapperPageContent>
            <WrapperHeader>
              {isMenuOpen ? null : (
                <SideButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleToggle}
                >
                  <MenuIcon />
                </SideButton>
              )}
              <Header />
            </WrapperHeader>
          </WrapperPageContent>
        </WrapperMain>
      </RootWrapperMain>

      <Outlet />
    </>
  );
};

export default SharedLayout;
