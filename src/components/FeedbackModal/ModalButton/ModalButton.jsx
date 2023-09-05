import  {Button}  from './ModalButton.styled';

const ModalButton = ({ textColor, backgroundColor, children, ...rest }) => {
  return (
    <Button
      type="submit"
      textColor={textColor}
      backgroundColor={backgroundColor}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default ModalButton;