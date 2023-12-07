"use client";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  isWidthFull?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled = false,
  isWidthFull = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 text-white bg-primary-100 font-semibold text-sm rounded-full disabled:opacity-40
      ${isWidthFull ? "w-full px-4" : "px-10"}
      hover:bg-primary-200 transition shadow-xl`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
