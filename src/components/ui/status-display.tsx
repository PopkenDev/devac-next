import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';

const messages = {
  styling: {
    success: 'bg-green-600/40 text-gray-50 border-green-800',
    warning: 'border-yellow-600/70 bg-yellow-600/30 text-gray-50',
    danger: 'bg-red-600/20 border-red-600/30 text-gray-50',
  },
  icons: {
    success: (
      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
    ),
    warning: (
      <FontAwesomeIcon
        icon={faExclamationTriangle}
        className="text-yellow-500"
      />
    ),
    danger: (
      <FontAwesomeIcon
        icon={faExclamationTriangle}
        className="text-red-600/80"
      />
    ),
  },
};

interface StatusDisplayProps {
  variant: 'success' | 'warning' | 'danger';
  children: React.ReactNode;
  className?: string;
}

export const StatusDisplay = ({
  variant,
  children,
  className,
}: StatusDisplayProps) => {
  if (!variant) return null;
  return (
    <div
      className={`${messages.styling[variant]} ${className} flex items-start gap-x-4 rounded-md border py-4 pl-4 pr-8`}
    >
      <span>{messages.icons[variant]}</span>
      <p className="text-sm leading-7 text-gray-300">{children}</p>
    </div>
  );
};
