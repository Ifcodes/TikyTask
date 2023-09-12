import { ReactNode, useRef } from "react";
import { useClickAway } from "react-use";
import "./styles.scss";
import CloseIcon from "../../atoms/vectors/closeIcon";
import clsx from "clsx";

interface ModalProps {
  title?: string;
  showModal: boolean;
  children: ReactNode;
  onClose: (val: boolean) => void;
}
const Modal = ({ showModal, title, children, onClose }: ModalProps) => {
  const clickRef = useRef(null);

  useClickAway(clickRef, () => {
    onClose(false);
  });

  return (
    <div>
      {showModal && <div className="modal-overlay"></div>}
      <div
        ref={clickRef}
        className={showModal ? "open-modal modal-box" : "modal-box"}
      >
        <div
          className={clsx(
            !title
              ? "flex items-center justify-end mb-5"
              : "flex justify-between items-center mb-5"
          )}
        >
          {title && <p className="font-bold text-lg">{title}</p>}
          <button className=" justify-self-end" onClick={() => onClose(false)}>
            <CloseIcon className="hover:bg-gray-200 cursor-pointer rounded-full transition-all" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
