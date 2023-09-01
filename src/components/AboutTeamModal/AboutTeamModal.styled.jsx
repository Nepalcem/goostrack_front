import styled from 'styled-components';

import { ReactSVG } from 'react-svg';

// Бекдроп
export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2000;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// Модальне вікно
export const ModalContainer = styled.div`
  background-color: white;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  max-width: 335px;

  min-height: 225px;
  max-height: 80%;

  padding: 30px 20px 20px 20px;

  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);
  overflow: scroll;
  background: radial-gradient(#ffffff, #3e85f3);

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    min-width: 570px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 990px;
  }
`;

// Кнопка закриття
export const CloseButton = styled.button`
  padding: 0;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;

  &:hover {
  }

  @media screen and (min-width: 768px) {
    /* top: 14px;
    right: 14px; */
  }
`;

// Заголовок модального вікна
export const Title = styled.p`
  font-weight: 700;
  font-size: 28px;
  line-height: 1.16;
  letter-spacing: 0.03em;
  text-align: center;
  color: #fff;
  /* color: #3e85f3; */
  margin-bottom: 20px;
  text-shadow: 0px 5px 10px rgba(0, 6, 7, 0.933);

  /* background: 50% 100% / 50% 50% no-repeat
    radial-gradient(ellipse at bottom, #fff, transparent, transparent);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent; */

  @media screen and (min-width: 768px) {
    font-size: 38px;
  }

  /* animation: reveal 3000ms ease-in-out forwards 200ms,
    glow 2500ms linear infinite 2000ms;

  @keyframes reveal {
    80% {
      letter-spacing: 4px;
    }

    100% {
      background-size: 300% 300%;
    }
  }

  @keyframes glow {
    40% {
      text-shadow: 0 0 8px #fff;
    }
  } */
`;

// контейнер усіх членів команди
export const ModalTeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
  }
`;

// Контейнер одного члена команди
export const ModalTeamItem = styled.div`
  width: 100%;
  padding: 15px;
  border: 2px solid #3e85f3;
  border-radius: 15px;
  /* box-shadow: 0px 5px 10px 0px rgba(167, 231, 248, 0.7); */
  box-shadow: 0px 5px 10px 0px rgba(0, 12, 15, 0.7);

  display: flex;
  flex-direction: column;
  align-items: center;

  transition: transform 250ms linear;

  @media screen and (min-width: 768px) {
    width: calc((100% - 20px) / 2);
  }

  @media screen and (min-width: 1440px) {
    width: calc((100% - 60px) / 4);
  }

  :hover,
  :focus {
    transform: scale(1.05);
    background-color: transparent;
  }
`;

// Обгортка фотографії
export const ImgThumb = styled.div`
  height: 170px;
  width: 170px;
  border-radius: 15px;
  overflow: hidden;
`;

// Фотографія
export const Img = styled.img`
  display: block;
  height: 100%;
  width: 100%;

  object-fit: cover;
`;

// Імʼя
export const Name = styled.h2`
  font-style: 500;
  font-size: 18px;
  line-height: 1.18;
  letter-spacing: 0.03em;
  text-align: center;
  margin-bottom: 5px;
  border: none;
  color: #3e85f3;
  margin-top: 5px;

  text-shadow: 0px 2px 5px rgba(247, 249, 249, 0.933);
`;

// Позиція
export const Position = styled.p`
  font-style: 400;
  font-size: 16px;
  line-height: 1.18;
  letter-spacing: 0.03em;
  text-align: center;
  margin-bottom: 10px;
  color: white;
  text-shadow: 0px 2px 5px rgba(0, 6, 7, 0.933);
`;

export const SocialList = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const SocialMediaLink = styled.a`
  color: rgba(62, 133, 243, 0.7);

  :hover {
    color: rgb(62, 133, 243);
  }
`;

export const SocialMediaIco = styled(ReactSVG)`
  fill: currentColor;
  width: 20px;
  height: 20px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
