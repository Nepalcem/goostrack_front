import {
  ProfInfoWrap,
  FeedbackButton,
  ThemeToggleButton,
  NameField,
  AvatarThumb,
  Avatar,
} from './UserInfo.styled';
import ThemeIcoButton from '../../../images/theme-ico-button-moon.svg';
import UserAvatar from '../../../images/accountPage/default-profile-avatar.png';
const UserInfo = () => {
  return (
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
  );
};
export default UserInfo;
