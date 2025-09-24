import { ArrowDownAZ, ArrowUpAZ } from 'lucide-react';

interface IListHeaderProps {
  orderBy: string;
  onClick: () => void;
}

export function ListHeader({ orderBy, onClick }: IListHeaderProps) {
  return (
      <header className="mt-6">
        <button type="button" className="bg-transparent border-none flex items-center text-ultramarine-blue" onClick={onClick}>
          <span className="font-bold mr-2">Nome</span>
          {orderBy === 'asc' ? <ArrowDownAZ /> : <ArrowUpAZ />}
        </button>
      </header>
  );
}
