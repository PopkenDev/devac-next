interface FormItemProps {
  children: React.ReactNode;
}

export const FormItem = ({ children }: FormItemProps) => {
  return <div className="flex flex-col gap-y-2">{children}</div>;
};
