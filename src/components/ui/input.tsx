'use client';

import { forwardRef } from 'react';

const inputVariants = {
  default:
    'bg-[#333] py-1.5 ring-orange-600 outline-none focus:ring-2 border border-white/10 text-gray-50 px-12',
  auth: 'bg-[#0e0e0e] py-1.5 w-full ring-orange-600 outline-none focus:ring-2 border border-white/10 px-4 text-gray-50 px-8',
  'no-icon':
    'bg-[#333] py-1.5 ring-orange-600 outline-none focus:ring-2 border border-white/10 text-gray-50 px-4',
};

interface InputProps {
  type: 'text' | 'password' | 'email' | 'number';
  variant: 'default' | 'auth' | 'no-icon';
  required: boolean;
  placeholder?: string;
  className?: string;
  value?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { type, placeholder, className, variant, value, required, ...props },
    ref,
  ) => {
    if (!variant) return null;
    return (
      <input
        {...props}
        ref={ref}
        required={required}
        value={value}
        type={type}
        placeholder={placeholder}
        className={`${inputVariants[variant]} ${className} rounded-md`}
      />
    );
  },
);

Input.displayName = 'Input';
