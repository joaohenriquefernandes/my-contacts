
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export function Select({children, ...props}: SelectProps) {
  return (
    <select
      name=""
      id=""
      className="w-full h-12 bg-white rounded-sm px-4 border-2 border-white border-solid outline-none shadow-[0px_4px_10px_rgba(0,0,0,0.04)] transition-colors ease-in appearance-none focus:border-ultramarine-blue"
      {...props}
    >
      {children}
    </select>
  )
}
