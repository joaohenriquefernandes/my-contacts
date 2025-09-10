interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

export function Input({ error=false, type, placeholder, ...props }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full h-12 bg-white rounded-sm px-4 border-2 border-white border-solid outline-none shadow-[0px_4px_10px_rgba(0,0,0,0.04)] transition-colors ease-in appearance-none focus:border-ultramarine-blue ${error && 'text-red-500 border-red-500!'}`}
      {...props}
    />
  )
}
