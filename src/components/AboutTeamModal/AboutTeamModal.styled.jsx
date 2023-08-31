import styled from 'styled-components';

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 2000;

  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* position: fixed; */
  /* top: 0; */
  /* left: 0; */
  /* width: 100vw; */
  /* height: 100vh; */
  /* background-color: rgb(0, 0, 0, 0.3); */
  /* z-index: 950; */

  /* pointer-events: none; */
  /* opacity: 0; */
  /* visibility: hidden; */
  /* transition: opacity 250ms ease-in-out, visibility 250ms ease-in-out; */
`;

export const ModalContainer = styled.div`
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 335px;
  padding: 60px 20px 20px 20px;
  /* transform: translateX(-50%); */
  /* transform: translateY(-50%); */
  transform: translate(-50%, -50%);
  /* min-height: 225px; */
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);

  /* max-height: 80vh; */

  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);

  margin-top: 30px;
  margin-bottom: 30px;

  overflow: scroll;

  /* padding: 24px; */
  /* border-radius: 4px; */
  /* max-width: 80%; */
  /* width: 100%; */
  /* max-height: 80%; */
  /* box-shadow: 0px 1px 3px 6px rgba(0, 8, 0, 0.2), */
  /* 0px 1px 1px rgba(0, 8, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 6, 0.12); */
  /* position: absolute; */
  /* overflow-y: auto; */
  /* background: radial-gradient(#b92f2c, #1f1013); */

  @media screen and (min-width: 768px) {
    width: 740px;
  }
`;

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
    top: 14px;
    right: 14px;
  }
`;

export const Title = styled.p`
  /* font-weight: 700;
  font-size: 30px;
  line-height: 1.16;
  letter-spacing: 0.03em;
  text-align: center;
  color: #b92f2c;
  margin-bottom: 30px;

  background: 50% 100% / 50% 50% no-repeat
    radial-gradient(ellipse at bottom, #fff, transparent, transparent);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 30px;

  @media screen and (min-width: 780px) {
    font-size: 38px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 38px;
  }

  animation: reveal 3000ms ease-in-out forwards 200ms,
    glow 2500ms linear infinite 2000ms;

  @keyframes reveal {
    80% {
      letter-spacing: 8px;
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

export const ModalTeamContainer = styled.div`
  /* display: flex;
  justify-content: center;
  margin-top: 20px;

  @media screen and (min-width: 769px) {
    margin-top: 30px;
  } */
`;

export const ModalTeamItem = styled.div`
  position: relative;
  width: 240px;
  padding-top: 15px;
  padding-bottom: 15px;
  border: 2px solid rgb(168, 113, 113);
  box-shadow: 0px 5px 10px 0px rgba(248, 216, 167, 0.7);

  @media screen and (min-width: 320px) {
    width: 100%;
    margin-bottom: 15px;
  }

  @media (min-width: 769px) and (max-width: 1279px) {
    width: calc((100% - 2 * 30px) / 2);
    margin: 15px;
  }

  @media screen and (min-width: 1279px) {
    flex-basis: calc(100% / 4 - 30px);
    margin-left: 30px;
    margin-bottom: 30px;
  }

  border-radius: 15px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    transform: scale(1.1);
    background-color: transparent;
  }
`;
