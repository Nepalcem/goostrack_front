import React from 'react';
import { useSelector } from 'react-redux';
import {
  ProfInfoWrap,
  NameField,
  AvatarThumb,
  Avatar,
} from './UserInfo.styled';
import ThemeToggler from 'components/ThemeToggler/ThemeToggler';
// import ThemeIcoButton from '../../../images/svg/moon.svg';
import UserAvatar from '../../../images/accountPage/default-profile-avatar.png';
import FeedbackButton from '../FeedbackButton/FeedbackButton';

const UserInfo = () => {
  const user = useSelector(state => state.auth.user);

  return (
    <ProfInfoWrap>
      <FeedbackButton />
      <ThemeToggler />
      {/* <ThemeToggleButton type="button">
        <img src={ThemeIcoButton} alt="change theme" width="100%" />

      </ThemeToggleButton>
 
      </ThemeToggleButton> */}
      <NameField>{user.username}</NameField>

      <AvatarThumb>
        <Avatar src={user.avatarURL || UserAvatar} alt="user avatar" />
      </AvatarThumb>
    </ProfInfoWrap>
  );
};
export default UserInfo;
