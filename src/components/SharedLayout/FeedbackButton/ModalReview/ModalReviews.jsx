import { ModalHeader } from '../ModalRating/ModalRating.styled';
import {
  StyledTextField,
  StyledReviewBox,
  PensilIcon,
  TrashIcon,
  ButtonPensilIcon,
  ButtonTrashIcon,
  IconModal,
} from './ModalReviews.styled';
import Pencil from '../../../../images/svg/pencil.svg';
import Trash from '../../../../images/svg/trash.svg';

const ModalReview = ({ value, onChange }) => {
  return (
    <StyledReviewBox>
      <IconModal>
        <ModalHeader>Review</ModalHeader>
        <ButtonPensilIcon>
          <PensilIcon src={Pencil} alt="" />
        </ButtonPensilIcon>
        <ButtonTrashIcon>
          <TrashIcon src={Trash} alt="" />
        </ButtonTrashIcon>
      </IconModal>
      <StyledTextField
        id="outlined-multiline-static"
        multiline
        placeholder="Enter text"
        rows={4}
        value={value}
        onChange={onChange}
      />
    </StyledReviewBox>
  );
};
export default ModalReview;
