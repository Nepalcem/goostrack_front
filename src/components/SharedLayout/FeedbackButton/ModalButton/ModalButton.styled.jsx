import styled from 'styled-components';

export const ContainerButton = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`;

export const ButtonStyled = styled.button`
  display: flex;
  width: 144px;
  height: 42px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
  border: 0px;
  background: ${props => props.color};
  padding: 12px 56px;
  @media screen and (min-width: 768px) {
    width: 198px;
    height: 48px;
    padding: 15px 85px;
  }
`;
export const TextButton = styled.p`
  color: ${props => props.color};
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 128.571% */
`;
