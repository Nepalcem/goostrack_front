import {
  ProfInfoWrap,
  NameField,
  AvatarThumb,
  Avatar,
} from './UserInfo.styled';
import ThemeToggler from 'components/ThemeToggler/ThemeToggler';
import UserAvatar from '../../../images/accountPage/default-profile-avatar.png';
import FeedbackButton from '../FeedbackButton/FeedbackButton';
import { useSelector } from 'react-redux';

const UserInfo = () => {
  const user = useSelector(state => state.auth.user);

  return (
    <ProfInfoWrap>
      <FeedbackButton />

      <ThemeToggler />
      <NameField>{user.username}</NameField>

      <AvatarThumb>
        <Avatar src={user.avatar || user.avatarURL || UserAvatar} alt="user avatar" />
      </AvatarThumb>
    </ProfInfoWrap>
  );
};
export default UserInfo;
