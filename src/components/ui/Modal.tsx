import { createPortal } from "react-dom";
import cn from "../../utilities/cn";
import {
  MouseEvent,
  ReactNode,
  createContext,
  useContext,
  useRef,
} from "react";

type TModal = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};
type TCloseButton = {
  children?: ReactNode;
};
type THeader = TCloseButton;
type TModalContext = {
  onClose: () => void;
};

const ModalContext = createContext<TModalContext | null>(null);
const Modal = ({ isOpen, onClose, children }: TModal) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleOutsideCloseModal = (e: MouseEvent) => {
    if (!containerRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };
  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div
        className={cn(
          "fixed inset-0 invisible bg-gray-500/70 flex justify-center items-center ",
          {
            visible: isOpen,
          }
        )}
        onClick={handleOutsideCloseModal}
      >
        <div
          ref={containerRef}
          className="w-full max-w-sm p-2 bg-white rounded-md"
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.getElementById("portal") as Element
  );
};

const CloseButton = ({ children }: TCloseButton) => {
  const { onClose } = useContext(ModalContext) as TModalContext;
  return (
    <>
      <button onClick={onClose} className="ml-auto ">
        {children ? (
          children
        ) : (
          <svg
            className="size-5 text-white  bg-red-500 rounded-md p-0.5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>
    </>
  );
};

const Header = ({ children }: THeader) => {
  return <div className="flex items-center justify-center">{children}</div>;
};

Modal.Header = Header;
Modal.CloseButton = CloseButton;

export default Modal;
