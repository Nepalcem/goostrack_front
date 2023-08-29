import {
  LeftDesktopMenu,
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

import LogoGoose from '../../../images/logo-goose-left-menu.png';
import AccountIco from '../../../images/svg/user.svg';
import CalendarIco from '../../../images/svg/calendar.svg';
import StatisticsIco from '../../../images/svg/chart-2.svg';
import LogOutIco from '../../../images/svg/log-out.svg';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';

const SiteNav = () => {
  const dispatch = useDispatch();

  return (
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

      <LeftMenuLogOutButton
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
        <LogOutIcoEl src={LogOutIco} alt="logout button" />
      </LeftMenuLogOutButton>
    </LeftDesktopMenu>
  );
};
export default SiteNav;
