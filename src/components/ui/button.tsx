'use client';

const buttonVariants = {
  default: '',
  auth: 'bg-orange-600 hover:bg-orange-800 text-gray-50 text-sm font-semibold py-2 w-full outline-none ring-orange-400 focus:ring-2',
  icon: '',
  oAuth: 'flex justify-center items-center gap-x-2',
  settings:
    'bg-[#222] hover:bg-[#333] w-fit text-gray-50 font-semibold text-sm py-2 px-4 outline-none ring-[#111] focus:ring-2 dark-shadow',
};

interface ButtonProps {
  variant: 'default' | 'auth' | 'icon' | 'oAuth' | 'settings';
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
