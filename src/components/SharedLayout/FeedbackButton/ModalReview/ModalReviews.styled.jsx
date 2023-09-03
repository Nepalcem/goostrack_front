import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

export const StyledTextField = styled.textarea`
  width: 295px;
  height: 130px;
  border-radius: 8px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    width: 404px;
    height: 127px;
  }
`;

export const StyledReviewBox = styled.div`
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
  }
`;
export const PensilIcon = styled(ReactSVG)`
  width: 14px;
  height: 14px;
  stroke: #3e85f3;
`;
export const TrashIcon = styled(ReactSVG)`
  width: 14px;
  height: 14px;
  stroke: #ea3d65;
`;
export const ButtonPensilIcon = styled.button`
  display: flex;
  width: 30px;
  height: 30px;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border-color: #e3f3ff;
  background: #e3f3ff;
  margin-bottom: 8px;
  border: 0px;
`;
export const ButtonTrashIcon = styled.button`
  display: flex;
  width: 30px;
  height: 30px;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 0px;
  background: rgba(234, 61, 101, 0.2);
  margin-bottom: 8px;
  margin-left: 8px;
`;
export const IconModal = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
`;
