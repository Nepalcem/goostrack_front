import ReactDOM from 'react-dom';
import { BackdropStyle, ModalStyle, StyledIcon } from './Modal.styled';
import { useEffect } from 'react';
import CloseIco from '../../images/svg/x-close.svg';

const Modal = ({ onClose, children, isOpen }) => {
  useEffect(() => {
    const handleEscape = e => {
      if (e.code === `Escape`) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);
  const handleMouseDown = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const handleMouseUp = e => {
    if (e.target !== e.currentTarget) {
      return;
    }
  };

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <BackdropStyle
      className="backdrop"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <ModalStyle>
        {children}
        <StyledIcon src={CloseIco} width='100%' alt="close button" onClick={onClose} />
      </ModalStyle>
    </BackdropStyle>,
    document.getElementById('modal-root')
  );
};

export default Modal;
