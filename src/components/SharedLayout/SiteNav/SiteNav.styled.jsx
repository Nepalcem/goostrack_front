import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

//---------Block desktop---------//
export const LeftDesktopMenu = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: flex;
    width: 290px;
    padding: 32px 24px;
    min-height: 100%;
    margin-right: 32px;
    flex-direction: column;
    // background-color: #ffffff;
    background-color: var(--background-color-nav);

  }
`;

//---------Block mobile tablet---------//
export const LeftMobileMenuBackDrop = styled.div`
  width: 100%;
  height: 100lvh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1000;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const LeftMobileMenuContainer = styled.div`
  width: 100%;
  max-width: 375px;
  min-height: 100vh;
  margin: 0 auto;
  /* outline: 2px solid blue; */
  pointer-events: none;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
`;

export const LeftMobileMenu = styled.div`
  display: flex;
  width: 225px;
  padding: 24px 20px;
  height: 100vh;
  flex-direction: column;
  background-color: #ffffff;
  position: relative;
  pointer-events: all;

  @media screen and (min-width: 768px) {
    width: 290px;
    padding: 24px 32px;
    overflow: scroll;
  }
`;

export const CloseButton = styled.button`
  padding: 0;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  position: absolute;
  top: 29px;
  right: 20px;

  @media screen and (min-width: 768px) {
    top: 36px;
    right: 32px;
  }
`;

//---------BLOCK FOR ALL---------//
export const LogoBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 64px;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`;

export const LogoImg = styled.img`
  margin-right: 6px;
  width: 36px;
  height: 36px;

  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
  }

  @media screen and (min-width: 1440px) {
    width: 70px;
    height: 70px;
    margin-right: 10px;
  }
`;

export const LogoText = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.375;
  color: var(--color-name-logo);

  // color: #3e85f3;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.35;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 1;
  }
`;

export const LeftMenuTitle = styled.p`
  color: var(--color-menu-title);
  // color: rgba(52, 52, 52, 0.5);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  margin-left: 20px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`;

export const LeftMenuItemLink = styled(NavLink)`
  display: flex;
  width: 100%;
  align-items: center;

  padding-left: 12px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 18px;

  border-radius: 8px;

  color: var(--color-menu-item);

  // color: rgba(52, 52, 52, 0.5);

  text-decoration: none;

  &.active {
    background-color: var(--bgr-btn-active);
    color: var(--color-bth-active);
    // background-color: #e3f3ff;
    // color: #3e85f3;
  }

  @media screen and (min-width: 768px) {
    padding-left: 20px;
    padding-top: 16px;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
`;

export const LeftMenuItemIco = styled(ReactSVG)`
  margin-right: 10px;
  stroke: currentColor;
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

// export const BurgerClose = styled(ReactSVG)`
//   stroke: currentColor;
//   margin-right: 10px;
// `;
// export const ButtonBurgerClose = styled.button`
//   opacity: 1;
//   width: 24px;
//   height: 24px;
//   margin-left: 6px;
//   padding: 0;
//   color: rgba(132, 130, 138, 1);
//   background-color: transparent;
//   &:hover,
//   &:focus {
//     color: rgba(62, 133, 243, 1);
//     background-color: transparent;
//   }
//   @media screen and (min-width: 768px) {
//     margin-left: 16px;
//     width: 36px;
//     height: 36px;
//   }
//   @media screen and (min-width: 1440px) {
//     width: 20vw;
//     opacity: 0;
//   }
// `;

export const LeftMenuItemText = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
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
// export const Overlay = styled.div`
//   position: fixed;
//   left: 0;
//   top: 0;
//   right: 0;
//   bottom: 0;

//   background-color: transparent;
//   z-index: 10;
// `;
