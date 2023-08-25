import { styled, Box } from '@mui/material';
import { IconButton } from '@mui/material';

export const RootWrapperMain = styled(Box)(`
    background-color:#F7F6F9;
    margin-bottom: 0;

  `);

export const WrapperMain = styled(Box)`
  display: flex;
  min-height: 100vh;
  max-width: 100vw;
  width: 1440px;
  margin: 0 auto;

  //  @media screen and(min-width: 1440px) {
  //   width: 1440px;

  // }
`;

export const WrapperSideBarContent = styled(Box)`
  border-right: 1px solid #ffffff26;
  background-color: #f7f6f9;
  color: #3e85f3;

  width: ${props => (props.data ? '289px' : 'none')};

  @media screen and(min-width: 1440px) {
    display: flex;
    justify-content: end;
  }
`;

export const WrapperPageContent = styled(Box)`
  display: flex;
  flex-grow: 1;
  background-color: #f7f6f9;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
  margin-left: 20px;
  padding-top: 24px;

  @media screen and (min-width: 1440px) {
    padding-top: 40px;
  }
`;

export const SideButton = styled(IconButton)(`
    @media (min-width: 1440px) {
    display: none;
  }

`);

export const WrapperHeader = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 335px;
  height: 32px;
  gap: 80px;

  @media screen and (min-width: 768px) {
    width: 100vw;
    max-width: 704px;
    height: 42px;
  }

  @media screen and (min-width: 1440px) {
    //width: 80%;
    max-width: 1100px;
    height: 42px;
  }
`;
