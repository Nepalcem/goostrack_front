/* eslint-disable jsx-a11y/alt-text */
import { StyledAvatar } from './Avatar.styled';
import { StyledLink, StyledUserBox } from './UserInfo.styled';

const UserInfo = () => {
  return (
    <StyledUserBox>
      <StyledLink>Denys</StyledLink>
      <StyledLink>
        <StyledAvatar
          src="/../../../../images/accountPage/default-profile-avatar.png"
          alt=""
        />
      </StyledLink>
    </StyledUserBox>
  );
};

export default UserInfo;
