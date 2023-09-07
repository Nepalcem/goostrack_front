import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 8px;
  border-color: transparent;
  width: calc(50% - 8px);
  cursor: pointer;
  padding-top: 12px;
  padding-bottom: 12px;
  font-family: Inter;
  font-weight: 14px;
  line-height: 1.29;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.17;
  color: ${props => props.textColor || '#343434'};
  background-color: ${props => props.backgroundColor || '#E5EDFA'};
  :not(:last-child) {
    margin-right: 8px;
  }

  &:hover{
    opacity: 0.8;
    }
  @media (min-width: 768px) {
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 14px;
    line-height: 1.29;
  }
`;

