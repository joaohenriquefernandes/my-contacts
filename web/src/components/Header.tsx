import logo from '../assets/images/logo.svg';

export function Header() {
  return (
    <header className="mt-20 flex justify-center items-center flex-col mb-12">
      <img src={logo} alt="MyContacts" width="201"/>
    </header>
  )
}
