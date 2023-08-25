import { Avatar, styled } from '@mui/material';

export const StyledAvatar = styled(Avatar)`
  width: 32px;
  height: 32px;
  margin-left: 8px;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;

    margin-left: 14px;
  }
`;
