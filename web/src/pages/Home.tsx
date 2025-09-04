import { Link } from "react-router-dom";
import { Card } from "../components/Card";
import { List } from "../components/List";

export function Home() {
  return (
    <>
      <div className="">
        <div className='w-full'>
          <input
            type="text"
            placeholder='Pesquise pelo nome...'
            className='w-full h-12 bg-white border-none rounded-3xl shadow-[0px_4px_10px_rgba(0,0,0,0.04)] outline-0 py-0 px-4 placeholder:text-gray-300'
          />
        </div>

        <header className="flex items-center justify-between mt-8">
          <strong className="text-gray-900 text-2xl">3 contatos</strong>
          <Link
            to="/new"
            className="text-ultramarine-blue decoration-0 font-bold border-2 border-solid border-ultramarine-blue py-2 px-4 rounded-sm transition-all ease-in hover:bg-ultramarine-blue hover:text-white"
          >
            Novo contato
          </Link>
        </header>

        <List>
          <Card />
          <Card />
          <Card />
        </List>
      </div>
    </>

  )
}
