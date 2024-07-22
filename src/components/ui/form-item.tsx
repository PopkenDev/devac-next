interface FormItemProps {
  children: React.ReactNode;
  className?: string;
}

export const FormItem = ({ children, className }: FormItemProps) => {
  return <div className={`flex flex-col gap-y-2 ${className}`}>{children}</div>;
};
