import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface PageHeaderProps {
  title: string
}

export function PageHeader({title}: PageHeaderProps) {
  return (
    <div className="mb-6">
      <Link to="/" className="text-ultramarine-blue flex items-center font-bold decoration-0 gap-2">
        <ArrowLeft />
        <span>Voltar</span>
      </Link>
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  )
}
