import {
  ProfInfoWrap,
  FeedbackButton,
  ThemeToggleButton,
  NameField,
  AvatarThumb,
  Avatar,
} from './UserInfo.styled';
import ThemeIcoButton from '../../../images/svg/moon.svg';
import UserAvatar from '../../../images/accountPage/default-profile-avatar.png';
import { useSelector } from 'react-redux';

const UserInfo = () => {
  const user = useSelector(state => state.auth.user);

  return (
    <ProfInfoWrap>
      <FeedbackButton type="button">Feedback</FeedbackButton>
      <ThemeToggleButton type="button">
        <img src={ThemeIcoButton} alt="change theme" width="100%" />
      </ThemeToggleButton>
      <NameField>{user.username}</NameField>
      <AvatarThumb>
        <Avatar src={UserAvatar} alt="user avatar" />
      </AvatarThumb>
    </ProfInfoWrap>
  );
};
export default UserInfo;
