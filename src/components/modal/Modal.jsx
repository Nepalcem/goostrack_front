import React from 'react';
import './Modal.css';

const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? 'modal__content active' : 'modal__content'}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;

// const modalRoot = document.querySelector('#modal-root');

// const Modal = ({ onClose, children }) => {
//     useEffect(() => {
//         window.addEventListener('keydown', handleKeyDown);
//         return () => {
//             window.removeEventListener('keydown', handleKeyDown)
//         }
//     });

//     const handleKeyDown = (e) => {
//         if (e.code === 'Escape') {
//             onClose();
//             };
//         };

//     const handleBackdropClick = (e) => {
//         if (e.currentTarget === e.target) {
//             onClose()
//         };
//     };

//         return createPortal(
//             <div className={css.backdrop} onClick={handleBackdropClick}>
//                 <div className={css.content}>
//                     <>
//                     <p>Rating</p>
//                     <img src="../../images/svg/yellow-star.svg" alt="yelow_star"></img>
//                     <div>
//                         <p>Review</p>
//                         <div>Enter text</div>
//                     </div>
//                     <button>Save</button>
//                     <button>Close</button>
//                 </></div>
//             </div>,
//             modalRoot)
//     };

// export default Modal;
