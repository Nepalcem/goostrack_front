import styled from 'styled-components';

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 2000;
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
  top: 14px;
  right: 14px;

  @media screen and (min-width: 768px) {
    top: 14px;
    right: 14px;
  }
`;
