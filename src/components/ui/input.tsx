"use client";

const inputVariants = {
  default: "",
  auth: "bg-[#0e0e0e] py-1.5 w-full ring-orange-600 outline-none focus:ring-2 border border-white/10 px-4 text-gray-50 px-8",
};

interface InputProps {
  type: "text" | "password" | "email" | "number";
  variant: "default" | "auth";
  placeholder?: string;
  className?: string;
}

export const Input = ({
  type,
  placeholder,
  className,
  variant,
}: InputProps) => {
  if (!variant) return null;
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${inputVariants[variant]} ${className}`}
    />
  );
};
