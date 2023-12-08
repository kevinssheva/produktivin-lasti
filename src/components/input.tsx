import { ChangeEvent, InputHTMLAttributes } from "react";
import { IconType } from "react-icons";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
  isPhone?: boolean;
}

const Input = ({
  label,
  id,
  register,
  required,
  errors,
  type = "text",
  disabled,
  isPhone,
}: InputProps) => {
  return (
    <div className="w-full relative">
      <input
        id={id}
        type={type}
        autoComplete={id}
        disabled={disabled}
        {...register(id, {
          required,
        })}
        className={`w-full py-2 px-4 rounded-2xl peer border-[1px] border-slate-400 outline-none bg-transparent text-white placeholder:text-white/70 ${
          errors[id] && "border-red-300 focus:border-red-300"
        } ${isPhone && "pl-12"}`}
        placeholder={label}
      />
      {errors[id] && (
        <p className="mt-1 text-sm text-red-100">{`${errors[id]?.message}`}</p>
      )}

      {isPhone && (
        <label
          htmlFor={id}
          className="absolute left-0 top-1/2 -translate-y-1/2 pl-4 text-white/70"
        >
          +62
        </label>
      )}
    </div>
  );
};

export default Input;
