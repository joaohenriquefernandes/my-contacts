import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, className, type, disabled, ...props }: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(
        "h-12 mt-6 px-4 border-none text-base font-bold text-white rounded-sm shadow-[0px_4px_10px_rgba(0,0,0,0.04)] transition-colors ease-in disabled:bg-gray-300 disabled:cursor-default",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
