import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
export const LeftDesktopMenu = styled.div`
  box-sizing: border-box;
  display: ${props => (props.data ? 'flex' : 'none')};
  width: 225px;
  min-height: 100%;
  z-index: 11;
  margin: 0;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  @media screen and (min-width: 768px) {
    width: 289px;
    padding: 24px 32px;
  }
  @media screen and (min-width: 1440px) {
    position: relative;
    display: flex;
    padding: 32px 24px;
  }
`;
export const LogoBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;
export const LogoImg = styled.img`
  margin-right: 10px;
`;
export const LogoText = styled.p`
  margin-left: 6px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.375;
  color: #3e85f3;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  @media screen and (min-width: 768px) {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.33;
  }
`;
export const LeftMenuTitle = styled.p`
  color: rgba(52, 52, 52, 0.5);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  margin-left: 20px;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const LeftMenuItemLink = styled(NavLink)`
  display: flex;
  width: 100%;

  padding-left: 20px;
  padding-top: 16px;
  padding-bottom: 16px;
  margin-bottom: 16px;

  border-radius: 8px;

  color: rgba(52, 52, 52, 0.5);

  text-decoration: none;

  &.active {
    background-color: #e3f3ff;
    color: #3e85f3;
  }
`;

export const LeftMenuItemIco = styled(ReactSVG)`
  margin-right: 10px;
  stroke: currentColor;
`;

export const BurgerClose = styled(ReactSVG)`
  stroke: currentColor;
  margin-right: 10px;
`;
export const ButtonBurgerClose = styled.button`
  opacity: 1;
  width: 24px;
  height: 24px;
  margin-left: 6px;
  padding: 0;
  color: rgba(132, 130, 138, 1);
  background-color: transparent;
  &:hover,
  &:focus {
    color: rgba(62, 133, 243, 1);
    background-color: transparent;
  }
  @media screen and (min-width: 768px) {
    margin-left: 16px;
    width: 36px;
    height: 36px;
  }
  @media screen and (min-width: 1440px) {
    width: 20vw;
    opacity: 0;
  }
`;

export const LeftMenuItemText = styled.p`
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const LeftMenuLogOutButton = styled.button`
  color: #ffffff;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.33333;
  letter-spacing: -0.36px;

  display: flex;
  margin-bottom: 0;
  margin-top: auto;
  padding: 16px 23px;

  border-radius: 16px;
  border: none;
  background-color: #3e85f3;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

  cursor: pointer;

  transition: background-color 250ms linear;

  &:hover {
    background-color: #2b78ef;
  }
`;

export const LogOutIcoEl = styled.img`
  margin-left: 11px;
`;
export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  background-color: transparent;
  z-index: 10;
`;
