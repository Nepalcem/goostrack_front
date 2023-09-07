import styled from 'styled-components';

const StarWrapper = styled.div`
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

const NameLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.17;
  color: rgba(52, 52, 52, 0.8);
`;

const InputStars = styled.input`
  display: none;
`;

const FeedbackWrapper = styled.div`
  margin-bottom: 14px;

  @media (min-width: 768px) {
    margin-bottom: 18px;
  }
`;

const InputFeedback = styled.textarea`
  resize: none;
  background-color: var(--color-textar);
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 14px;
  padding-right: 14px;
  border: ${props => (props.hasError ? '1px solid #EA3D65' : 'none')};
  border-radius: 8px;
  width: 100%;
  color: var(--color-text-textar);
  font-family: Inter;
  font-size: 14px;
  line-height: 1.29;
  font-weight: 600;

  ::placeholder {
    color: var(--color-text-textar);
    font-size: 14px;
    line-height: 1.29;
    font-weight: 600;
  }
`;

const ErrorsMessage = styled.p`
  margin-top: 5px;
  color: #ea3d65;
  font-size: 12px;
  line-height: 1.29;
  font-weight: 500;
`;

const IconWrapper = styled.div`
  display: flex;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const CircleIcon = styled.div`
  display: inline-block;
  margin-left: 8px;
  width: 30px;
  height: 30px;
  background-color: ${({ backgroundColor }) => backgroundColor || '#E3F3FF'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconButton = styled.div`
  border: none;
`;

export {
  StarWrapper,
  NameLabel,
  InputStars,
  FeedbackWrapper,
  InputFeedback,
  ErrorsMessage,
  IconWrapper,
  CircleIcon,
  TitleWrapper,
  IconButton,
};
