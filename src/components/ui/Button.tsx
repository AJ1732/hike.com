import { twMerge } from "tailwind-merge";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className={twMerge(
        "bg-soot rounded-full px-7 py-3.5 text-white drop-shadow-lg transition-all duration-300 hover:bg-neutral-900",
        className,
      )}
    >
      {children}
    </button>
  );
};
export default Button;
