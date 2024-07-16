"use client";

const formLabelVariants = {
  default: "",
  auth: "text-gray-50 font-semibold text-sm",
};

interface FormLabelProps {
  variant: "default" | "auth";
  label: string;
  className?: string;
}

export const FormLabel = ({ label, variant, className }: FormLabelProps) => {
  if (!variant) return null;
  return (
    <label className={`${formLabelVariants[variant]} ${className}`}>
      {label}
    </label>
  );
};
