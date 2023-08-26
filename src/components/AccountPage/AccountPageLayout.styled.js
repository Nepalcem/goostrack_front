import styled from 'styled-components';

export const AccountPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  border-radius: 16px;
  align-items: center;
  margin:20px;
  margin-top: 95px;
  padding-bottom: 40px;
`;

export const AccountPageAvatar = styled.img`
  width: 72px;
  /* display: block; */
  &:hover {
    border: 2px solid #3e85f3;
    cursor: pointer;
    border-radius: 50%;
  }
`;

export const UserAvatarPlus = styled.div`
  position: relative;
  transform: translateY(-50%);
`;

export const AccountAvatarPlusIcon = styled.img`
  position: absolute;
  top: 75%;
  left: 65%;
`;

export const AccountUserName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(-50%);
`;

export const AccountUserNameTitle = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: calc(18 / 14);
`;
export const AccountUserNameRole = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: calc(14 / 12);
`;
