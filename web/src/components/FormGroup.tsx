import type { ReactNode } from "react";

interface FormGroupProps {
  error?: string | null
  children: ReactNode
}

export function FormGroup({ children, error=null }: FormGroupProps) {
  return (
    <div>
      {children}
      {error && <small className="text-red-500 text-xs block mt-2">{error}</small>}
    </div>
  )
}
