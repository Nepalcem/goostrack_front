import {
  StyleHeagerText,
  StyledBox,
  StyledButtonLogout,
  StyledButtonClose,
  StyledContainer,
  StyledHeader,
  StyledLink,
  StyledPicture,
  StyledUser,
  UserNavTitle,
  Overlay,
} from './SiteNav.styled';
import { LogoIcon } from './SiteNavLogo.styled';
import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';

const basePath = '../../../images/sideBarImg/';

const Sitenav = ({ onClose, isOpen }) => {
  return (
    <StyledContainer data={isOpen ? 'true' : undefined}>
      <StyledBox>
        <StyledHeader>
          <StyledPicture>
            <StyleHeagerText>GooseTrack</StyleHeagerText>
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
            <LogoIcon
              src={require('../../../images/sideBarImg/goose_desktop@2x.png')}
              alt="Logo goose"
            />
          </StyledPicture>
          <StyledButtonClose
            variant="text"
            onClick={onClose}
            startIcon={<CloseIcon />}
          ></StyledButtonClose>
        </StyledHeader>
        <StyledUser>User Panel</StyledUser>

        <ul>
          <StyledLink to="/account">
            <UserNavTitle>My account</UserNavTitle>
          </StyledLink>
          <StyledLink to="/calendar">
            <UserNavTitle>Calendar</UserNavTitle>
          </StyledLink>
          <StyledLink>
            <UserNavTitle to="/statistics">Statistics</UserNavTitle>
          </StyledLink>
        </ul>
      </StyledBox>

      <StyledButtonLogout
        variant="contained"
        // onClick={logOut}
        endIcon={<LogoutIcon sx={{ '&:hover': { color: 'red' } }}></LogoutIcon>}
      >
        Log Out
      </StyledButtonLogout>
      {isOpen && <Overlay onClick={onClose} />}
    </StyledContainer>
  );
};
export default Sitenav;
