import { SquarePen, Trash } from "lucide-react";
import { Link } from "react-router-dom";

export function Card() {
  return (
    <div className="bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.04)] p-4 rounded-sm mt-1 flex items-center justify-between">
      <div className="">
        <div className="flex items-center">
          <strong>Mateus Silva</strong>
          <small className="bg-lavender text-ultramarine-blue font-bold uppercase p-1 rounded-sm ml-2">instagram</small>
        </div>
        <span className="block text-sm text-gray-400">email@email.com</span>
        <span className="text-sm text-gray-400">(99)99999-9999</span>
      </div>

      <div className="flex items-center">
        <Link to="/edit/123" className="text-ultramarine-blue">
          <SquarePen />
        </Link>
        <button type="button" className="bg-transparent border-0 ml-2 text-red-400">
          <Trash />
        </button>
      </div>
    </div>
  )
}
