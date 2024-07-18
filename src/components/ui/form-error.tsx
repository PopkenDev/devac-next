import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface FormErrorProps {
  message: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  return (
    <div className="flex items-center gap-x-2 rounded-md border border-red-600 bg-red-600/30 px-4 py-3 text-red-500">
      <FontAwesomeIcon icon={faCircleExclamation} className="h-5 w-5" />
      {message}
    </div>
  );
};
