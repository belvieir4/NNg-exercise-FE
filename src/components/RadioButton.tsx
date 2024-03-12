import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type RadioButtonProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export default function RadioButton({ ...props }: RadioButtonProps) {
  return (
    <label className="relative flex items-center justify-center w-[22px] h-[22px] outline-offset-2 border border-blue-50 rounded-full focus-within:outline focus-within:outline-2 focus-within:outline-blue-50">
      <input
        {...props}
        type="radio"
        id="radio"
        className="absolute sr-only w-full h-full peer"
      />
      <div className="w-[12px] h-[12px] bg-blue-50 rounded-full opacity-0 peer-checked:opacity-100" />
    </label>
  );
}
