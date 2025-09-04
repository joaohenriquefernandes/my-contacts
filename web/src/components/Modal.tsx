import ReactDOM from 'react-dom';
import { Button } from "./Button";

interface ModalProps {
  danger?: boolean
}

export function Modal({ danger = false }: ModalProps) {
  return ReactDOM.createPortal(
    <div className="bg-black/60 backdrop-blur-xs absolute w-full h-full left-0 top-0 flex items-center justify-center">
      <div className="bg-white p-6 rounded-sm shadow-[0px_4px_10px_rgba(0,0,0,0.04)] max-w-md w-full">
        <h1 className={`text-2xl ${danger ? 'text-red-500' : 'text-gray-900'}`}>Título do modal</h1>
        <p className="mt-2">Corpo do modal</p>
        <footer className="mt-8 flex items-end justify-end">
          <button type="button" className="h-12 px-2 bg-transparent border-0 text-gray-400 text-base mr-3">Cancelar</button>
          <Button type="button" className={danger ? 'bg-red-500 hover:bg-red-400 active:bg-red-700' : 'bg-ultramarine-blue hover:bg-very-light-blue active:bg-palatinate-blue'}>
            Deletar
          </Button>
        </footer>
      </div>
    </div>,
    document.getElementById('modal-root')!
  )
}
