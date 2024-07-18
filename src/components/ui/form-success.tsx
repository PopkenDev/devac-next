import {
  faCheckCircle,
  faCircleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface FormSuccessProps {
  message: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  return (
    <div className="flex items-center gap-x-2 rounded-md border border-emerald-600 bg-emerald-600/30 px-4 py-3 text-emerald-500">
      <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5" />
      {message}
    </div>
  );
};
