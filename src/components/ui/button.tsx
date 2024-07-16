"use client";

const buttonVariants = {
  default: "",
  auth: "bg-orange-600 hover:bg-orange-800 text-gray-50 text-sm font-semibold py-2 w-full outline-none ring-orange-400 focus:ring-2",
  icon: "",
};

interface ButtonProps {
  variant: "default" | "auth" | "icon";
  label: string;
  type: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

export const Button = ({
  label,
  variant,
  type,
  className,
  disabled,
}: ButtonProps) => {
  if (!variant) return null;
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${buttonVariants[variant]} ${className} transition-all duration-300 ease-in-out`}
    >
      {label}
    </button>
  );
};
