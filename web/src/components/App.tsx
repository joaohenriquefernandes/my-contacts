import { BrowserRouter } from "react-router-dom"
import "../assets/styles/global.css"
import { Routes } from "../Routes"
import { Header } from "./Header"

export function App() {
  return (
    <BrowserRouter>
      <div className="w-full max-w-lg my-0 mx-auto">
        <Header />
        <Routes />
      </div>
    </BrowserRouter>
  )
}
