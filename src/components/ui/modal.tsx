import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

interface ModalProps {
  children: React.ReactNode;
  title?: string;
  close: () => void;
}

export const Modal = ({ children, title, close }: ModalProps) => {
  return (
    <div
      className="fadeIn fixed left-0 top-0 grid h-screen w-full place-items-center bg-black/50"
      onClick={close}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="dark-shadow zoomIn relative flex flex-col gap-y-4 rounded-md bg-[#131313] px-4 py-6"
      >
        <button
          onClick={close}
          className="absolute right-3.5 top-2 text-gray-50"
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
        <span className="text-sm font-semibold text-gray-50">{title}</span>

        {children}
      </div>
    </div>
  );
};
