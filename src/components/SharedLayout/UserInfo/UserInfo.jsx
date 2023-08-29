import React, { useState } from "react";

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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ProfInfoWrap>
      <FeedbackButton type="button" onClick={openModal}>Feedback</FeedbackButton>
      {isModalOpen && <Modal onClose={closeModal}></Modal>}
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
