import {
  LeftMobileMenuBackDrop,
  LeftMobileMenuContainer,
  LeftMobileMenu,
  CloseButton,
  LogoBlock,
  LogoImg,
  LogoText,
  LeftMenuTitle,
  LeftMenuItemIco,
  LeftMenuItemLink,
  LeftMenuItemText,
  LeftMenuLogOutButton,
  LogOutIcoEl,
} from './SiteNav.styled';

import BurgerMenuClose from '../../../images/svg/x-close.svg';
import LogoGoose from '../../../images/logo-goose-left-menu.png';
import AccountIco from '../../../images/svg/user.svg';
import CalendarIco from '../../../images/svg/calendar.svg';
import StatisticsIco from '../../../images/svg/chart-2.svg';
import LogOutIco from '../../../images/svg/log-out.svg';

import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';

import { createPortal } from 'react-dom';
const mobileMenuRoot = document.querySelector('#main-menu-root');

const SiteNavMobile = ({ handleToggle }) => {
  const dispatch = useDispatch();

  const backdropClick = e => {
    console.log('e.currentTarget', e.currentTarget);
    console.log('e.target', e.target);
    if (e.currentTarget === e.target) {
      handleToggle();
    }
  };

  return createPortal(
    <LeftMobileMenuBackDrop onClick={backdropClick}>
      <LeftMobileMenuContainer>
        <LeftMobileMenu>
          <CloseButton onClick={handleToggle}>
            <img src={BurgerMenuClose} alt="close menu" width="100%" />
          </CloseButton>

          <LogoBlock>
            <LogoImg src={LogoGoose} alt="logo goose" />
            <LogoText>GooseTrack</LogoText>
          </LogoBlock>

          <LeftMenuTitle>User Panel</LeftMenuTitle>

          <LeftMenuItemLink to="account" onClick={handleToggle}>
            <LeftMenuItemIco src={AccountIco} />

            <LeftMenuItemText>My account</LeftMenuItemText>
          </LeftMenuItemLink>

          <LeftMenuItemLink to="/calendar" onClick={handleToggle}>
            <LeftMenuItemIco src={CalendarIco} />

            <LeftMenuItemText>Calendar</LeftMenuItemText>
          </LeftMenuItemLink>

          <LeftMenuItemLink to="/statistics" onClick={handleToggle}>
            <LeftMenuItemIco src={StatisticsIco} />

            <LeftMenuItemText>Statistics</LeftMenuItemText>
          </LeftMenuItemLink>

          <LeftMenuLogOutButton
            type="button"
            onClick={() => {
              dispatch(authOperations.logOut());
              handleToggle();
            }}
          >
            Log out
            <LogOutIcoEl src={LogOutIco} alt="logout button" />
          </LeftMenuLogOutButton>
        </LeftMobileMenu>
      </LeftMobileMenuContainer>
    </LeftMobileMenuBackDrop>,
    mobileMenuRoot
  );
};
export default SiteNavMobile;
