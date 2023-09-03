import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;
export const Label = styled.label`
  display: inline-block;
`;

export const Radio = styled.input`
  display: none;
`;
export const Rating = styled.div`
  cursor: pointer;
  display: flex;
`;
export const ModalHeader = styled.h1`
  display: block;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin-top: 0;
  margin-bottom: 8px;
  margin-right: auto;
`;
