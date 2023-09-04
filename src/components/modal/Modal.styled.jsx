import { ReactSVG } from 'react-svg';

import styled, { keyframes } from 'styled-components';

export const BackdropStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 12;
`;
const fadeInAnimation = keyframes`
  from {
    margin-left: 100%;
    width: 300%;
  }
  to {
    margin-left: 0%;
    width: 100%;
  }
`;

const ModalStyleInner = styled.div`
  max-width: 468px;
  max-height: 349px;
  background-color: #ffffff;
  color: #343434;
  padding: 28px 20px;
  z-index: 12;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(220, 227, 229, 0.8);
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
  border-radius: 8px;
  animation: ${fadeInAnimation} 0.3s ease-in;

  @media (min-width: 375px) {
    max-width: 335px;
  }

  @media (min-width: 768px) {
    max-width: 468px;
    height: auto;
    padding: 32px;
  }
`;
export const ModalStyle = ({ children }) => {
  return <ModalStyleInner>{children}</ModalStyleInner>;
};

export const StyledIcon = styled(ReactSVG)`
  position: absolute;
  top: 19px;
  right: 19px;
  transition: all 250ms;
  cursor: pointer;
  width: 24px;
  height: 24px;
  stroke: #111111;

  &:hover,
  &:focus {
    stroke: red;
  }
`;