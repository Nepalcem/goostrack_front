import styled from 'styled-components';

export const AccountPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color-btn-change-day);
  
  //  background-color: white;
  border-radius: 16px;
  align-items: center;
  /* margin: 10px; */
  margin-top: 95px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    padding: 40px;
  }
  @media screen and (min-width: 768px) {
    margin: 0px;
    margin-top: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }

  & .centered-element {
  align-self: center;

}
`;

export const AccountPageAvatar = styled.img`
  width: 72px;
  border-radius: 50%;
  @media screen and (min-width: 768px) {
    width: 124px;
  }
  /* display: block; */
  &:hover {
    border: 2px solid #3e85f3;
    cursor: pointer;
    border-radius: 50%;
  }
`;

export const UserAvatarPlus = styled.div`
  position: relative;
  margin-bottom: 14px;
  @media screen and (max-width: 767px) {
    transform: translateY(-50%);
  }
`;

export const AccountAvatarPlusIcon = styled.img`
  position: absolute;
  top: 80%;
  left: 65%;
  @media screen and (max-width: 767px) {
    width: 12px;
  }
`;

export const AccountUserName = styled.div`
  color: var(--color-title-profil);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 767px) {
    transform: translateY(-50%);
  }
`;

export const AccountUserNameTitle = styled.div`
  color: var(--color-name-user);
  font-weight: 700;
  font-size: 14px;
  line-height: calc(18 / 14);
  text-transform: capitalize;
`;
export const AccountUserNameRole = styled.div`

  font-weight: 600;
  font-size: 12px;
  line-height: calc(14 / 12);
`;
