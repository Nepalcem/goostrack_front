import { useEffect } from "react";
import { createPortal } from 'react-dom';
import css from "./Modal.module.css";

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    });

    const handleKeyDown = (e) => {
        if (e.code === 'Escape') {
            onClose();
            };
        };

    const handleBackdropClick = (e) => {
        if (e.currentTarget === e.target) {
            onClose()
        };
    };
    
        return createPortal(
            <div className={css.backdrop} onClick={handleBackdropClick}>
                <div className={css.content}>{children}</div>
            </div>,
            modalRoot)
    };

export default Modal;

// потім там де виідкривається модалка або вище потрібно прописати:
// const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

// це або кнопка-батон або, наприклад, фідбек: їй потрібно ось так прописати
   
//   <button onClick={openModal}>Open Modal</button>
//       {isModalOpen && (
//         <Modal onClose={closeModal}>
//           <h3>Modal Content</h3>
//           <p>This is the content of the modal.</p>
//           {/* <button onClick={openModal}>Open Modal</button> */}
//           <button onClick={closeModal}>Close Modal</button>
//         </Modal>
//       )}
