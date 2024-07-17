interface FormErrorMsgProps {
  message: string | undefined;
}

export const FormErrorMsg = ({ message }: FormErrorMsgProps) => {
  return <span className="text-sm text-red-600">{message}</span>;
};
