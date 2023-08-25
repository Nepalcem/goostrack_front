import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

export const Main = styled.main`
  background-color: #f7f6f9;
  /* height: 100vh; */
  margin-bottom: 0;
`;

export const Container = styled.div`
  /*----Базовий стиль для мобілки 375 - 767 (адаптивний)----*/
  outline: 2px solid tomato;
  width: 100%;
  max-width: 375px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 24px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
    padding-top: 24px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    flex-direction: row;
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
  }
`;

// TOP-MEMU MOBILE AND TABLET

export const MainContent = styled.div`
  @media screen and (min-width: 1440px) {
    padding-left: 32px;
    padding-right: 32px;
    width: 100%;
  }
`;

export const TopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 64px;

  @media screen and (min-width: 1440px) {
    margin-top: 46px;
    margin-bottom: 33px;
  }
`;

export const TopMenuLeftPart = styled.div``;

export const BurgerMenuButton = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;

  width: 24px;
  height: 24px;

  &:hover {
  }

  @media screen and (min-width: 768px) {
    width: 34px;
    height: 34px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const ProfInfoWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const FeedbackButton = styled.button`
  padding: 8px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #3e85f3;
  border: none;

  color: #ffffff;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.33333;

  cursor: pointer;

  transition: background-color 250ms linear;

  &:hover {
    background-color: #2b78ef;
  }

  @media screen and (min-width: 768px) {
    padding: 12px 32px;

    font-size: 14px;
    line-height: 1.28571;
  }
`;

export const ThemeToggleButton = styled.button`
  margin-left: 18px;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;

  &:hover {
  }

  @media screen and (min-width: 768px) {
    margin-left: 24px;
    width: 32px;
    height: 32px;
  }
`;

export const NameField = styled.p`
  margin-left: 8px;

  color: #343434;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.28571;

  @media screen and (min-width: 768px) {
    margin-left: 14px;

    font-size: 18px;

    line-height: 1;
  }
`;

export const AvatarThumb = styled.div`
  margin-left: 8px;

  height: 32px;
  width: 33px;
  border-radius: 50%;
  overflow: hidden;

  /* border-radius: 32px; */
  border: 1.8px solid #3e85f3;
  background: lightgray 50% / cover no-repeat;

  @media screen and (min-width: 768px) {
    height: 44px;
    width: 44px;
    margin-left: 14px;
  }
`;

export const Avatar = styled.img`
  display: block;
  height: 100%;
  width: 100%;

  object-fit: cover;
`;

// MEMU FOR DESKTOP

export const LeftDesktopMenu = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: flex;
    min-width: 289px;
    background-color: #ffffff;
    align-items: flex-start;
    flex-direction: column;

    padding: 32px 24px 24px 24px;
  }
`;

export const Heading = styled.h1`
  display: none;

  @media screen and (min-width: 1440px) {
    display: flex;

    color: #111111;
    text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
      0px 47px 355px rgba(0, 0, 0, 0.07);
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 1;
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
  color: #3e85f3;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 1;
`;

export const LeftMenuTitle = styled.p`
  color: rgba(52, 52, 52, 0.5);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  margin-bottom: 32px;
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
