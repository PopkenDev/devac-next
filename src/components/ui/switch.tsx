interface SwitchProps {
  label: string;
  isChecked: boolean;
  onChange: () => void;
}

export const Switch = ({ label, isChecked, onChange }: SwitchProps) => {
  return (
    <div className="flex items-center gap-x-2">
      <div
        className={`relative h-3.5 w-10 cursor-pointer rounded-xl transition-colors duration-300 ease-in-out ${isChecked ? 'bg-orange-600/50' : 'bg-gray-600/50'}`}
        onClick={onChange}
      >
        <span
          className={`absolute left-0 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full transition-all duration-300 ease-in-out ${isChecked ? 'left-[calc(100%-20px)] bg-orange-600' : 'left-[0] bg-gray-50'}`}
        ></span>
      </div>

      <span className="text-xs text-gray-300">{label}</span>
    </div>
  );
};
