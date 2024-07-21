'use client';

const buttonVariants = {
  default: '',
  auth: 'bg-orange-600 hover:bg-orange-800 text-gray-50 text-sm font-semibold py-2 w-full outline-none ring-orange-400 focus:ring-2',
  icon: '',
  oAuth: 'flex justify-center items-center gap-x-2',
  settings:
    'bg-[#222] hover:bg-[#333] w-fit text-gray-50 font-semibold text-sm py-2 px-4 outline-none ring-[#111] focus:ring-2 dark-shadow',
  warning: '',
  danger:
    'bg-[#222] hover:bg-[#333] dark-shadow w-fit text-red-700 font-semibold text-sm py-2 px-4 outline-none ring-red-800 focus:ring-2',
  success: '',
  outline:
    'bg-transparent border w-fit border-orange-600 text-orange-600 text-sm font-semibold py-2 px-4 outline-none ring-orange-400 focus:ring-2 hover:bg-orange-600 hover:text-gray-50',
};

interface ButtonProps {
  variant:
    | 'default'
    | 'auth'
    | 'icon'
    | 'oAuth'
    | 'settings'
    | 'warning'
    | 'danger'
    | 'success'
    | 'outline';
  label: string;
  type: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  icon?: JSX.Element;
}

export const Button = ({
  label,
  variant,
  type,
  className,
  disabled,
  icon,
}: ButtonProps) => {
  if (!variant) return null;
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${buttonVariants[variant]} ${className} rounded-md transition-all duration-300 ease-in-out`}
    >
      {icon}
      {label}
    </button>
  );
};
