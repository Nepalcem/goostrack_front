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
  Overlay,
  BurgerClose,
  ButtonBurgerClose,
} from './SiteNav.styled';
import LogoGoose from '../../../images/logo-goose-left-menu.png';
import AccountIco from '../../../images/svg/user.svg';
import CalendarIco from '../../../images/svg/calendar.svg';
import StatisticsIco from '../../../images/svg/chart-2.svg';
import LogOutIco from '../../../images/svg/log-out.svg';
import closeBurgerMenu from '../../../images/svg/log-out.svg';
const basePath = '../../../images/sideBarImg/';

const SiteNav = ({ onClose, isOpen }) => {
  return (
    <LeftDesktopMenu data={isOpen ? 'true' : undefined}>
      <LogoBlock>
        <source
          media="(min-width: 375px)"
          srcSet={`${basePath}goose_mobile.png 1x, ${basePath}goose_mobile@2x.png 2x`}
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${basePath}goose_table.png 1x, ${basePath}goose_table@2x.png 2x`}
        />
        <source
          media="(min-width: 1440px)"
          srcSet={`${basePath}goose_desktop.png 1x, ${basePath}goose_desktop@2x.png 2x`}
        />
        <LogoImg src={LogoGoose} alt="logo goose" />
        <LogoText>GooseTrack</LogoText>
        <ButtonBurgerClose>
          <BurgerClose src={closeBurgerMenu} />
        </ButtonBurgerClose>
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
      {isOpen && <Overlay onClick={onClose} />}
    </LeftDesktopMenu>
  );
};
export default SiteNav;
