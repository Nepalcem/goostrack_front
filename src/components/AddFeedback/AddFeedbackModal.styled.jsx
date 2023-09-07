import { GrClose } from 'react-icons/gr';
import styled from 'styled-components';

export const CloseModalButton = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  border: none;
  background-color: transparent;
`;

export const IconClose = styled(GrClose)`
  width: 20px;
  height: 20px;
  fill: var(--color-white-close-btn);
  cursor: pointer;
`;
