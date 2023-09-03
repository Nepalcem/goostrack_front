import {
  ButtonStyled,
  ContainerButton,
  TextButton,
} from './ModalButton.styled';

const ModalButton = () => {
  return (
    <ContainerButton>
      <ButtonStyled color="#3E85F3">
        <TextButton color="#FFFFFF">Save</TextButton>
      </ButtonStyled>
      <ButtonStyled color="#E5EDFA">
        <TextButton color="#343434">Cancel</TextButton>
      </ButtonStyled>
    </ContainerButton>
  );
};
export default ModalButton;
