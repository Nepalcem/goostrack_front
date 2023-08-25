import AddFeedbackButton from './AddFeedbackButton/AddFeedbackButton';
import ChangeTitleName from './ChangeTitleName/ChangeTitleName';
import { StyledBox, StyledWrapper, UserBox } from './Header.styled';
import ThemeToogle from './ThemeToogle/ThemeToogle';
import UserInfo from './UserInfo/UserInfo';

const Header = () => {
  return (
    <StyledBox>
      <StyledWrapper>
        <ChangeTitleName />
        <UserBox>
          <AddFeedbackButton />
          <ThemeToogle />
          <UserInfo />
        </UserBox>
      </StyledWrapper>
    </StyledBox>
  );
};

export default Header;
