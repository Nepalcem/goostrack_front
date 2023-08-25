import styled from 'styled-components';


export const AccountPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  border-radius: 16px;
  align-items: center;
`;

export const AccountPageAvatar = styled.img`
  width: 72px;
  transform: translateY(-50%);
  &:hover {
    border: 2px solid #3e85f3;
    cursor: pointer;
    border-radius: 50%;
  }

`;

export const UserAvatarPlus = styled.div`
    position: relative;
`;

export const AccountAvatarPlusIcon = styled.img`
position: absolute;
top:33%;
left: 65%;
`;