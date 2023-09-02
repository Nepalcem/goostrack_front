import styled from 'styled-components';

export const TaskContainer = styled.div`
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background-color: #f7f6f9;
  padding: 16px 15px;
`;

export const Description = styled.p`
  /* overflow: hidden; */
  color: #111;
  /* text-overflow: ellipsis; */
  /* whitespace: nowrap; */
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.28571;
`;

export const OptionsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 28px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const AvaThumb = styled.div`
  height: 32px;
  width: 32px;
  overflow: hidden;

  border-radius: 32px;
  border: 1.8px solid #3e85f3;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;

  margin-right: 8px;
`;

export const Ava = styled.img`
  display: block;
  height: 100%;
  width: 100%;

  object-fit: cover;
`;

export const Priority = styled.div`
  background-color: ${props => props.type === 'low' && '#72C2F8'};
  background-color: ${props => props.type === 'medium' && '#F3B249'};
  background-color: ${props => props.type === 'high' && '#EA3D65'};
  padding: 4px 12px;
  border-radius: 4px;

  color: #f7f6f9;
  text-align: center;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2;
`;

export const ButtonsBlock = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;

export const ButtonController = styled.button`
  width: 14px;
  height: 14px;
  padding: 0;
  border: none;
  background-color: transparent;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;
