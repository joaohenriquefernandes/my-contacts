import { ArrowUpAZ } from "lucide-react";

export function List(props) {
  return (
    <div className="mt-6">
      <header>
        <button type="button" className="bg-transparent border-none flex items-center text-ultramarine-blue">
          <span className="font-bold mr-2">Nome</span>
          <ArrowUpAZ />
        </button>
      </header>

      <div className="space-y-4">
        {props.children}
      </div>
    </div>
  )
}
