import styled from 'styled-components';

export const TaskContainer = styled.div`
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background-color: #f7f6f9;
  padding: 16px 15px;
`;

export const AvaThumb = styled.div`
  height: 32px;
  width: 32px;
  overflow: hidden;

  border-radius: 32px;
  border: 1.8px solid #3e85f3;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
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
`;
