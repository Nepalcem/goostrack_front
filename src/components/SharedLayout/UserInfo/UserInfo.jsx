import React, { useState } from 'react';

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
import Modal from 'components/modal/Modal';

const UserInfo = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <ProfInfoWrap>
      <FeedbackButton type="button" onClick={() => setModalActive(true)}>
        Feedback
      </FeedbackButton>
      <Modal active={modalActive} setActive={setModalActive}>
        {/* <form action="">
          <input type="text" />
          <textarea type="text" />
          <input type="text" />
          <button className="close__btn" onClick={() => setModalActive(false)}>
            Закрити модалку
          </button>
        </form> */}
      </Modal>
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
