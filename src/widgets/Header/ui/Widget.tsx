import { FC } from 'react'
import { Link } from 'react-router-dom'
import { MobileMenu } from '@widgets/MobileMenu'

export const Header: FC = () => {
  return (
    <header className="container flex items-center justify-between bg-amber-600 p-4 text-white">
      <div className="text-xl font-extrabold text-black">MARKET</div>

      <nav className="hidden gap-8 md:flex">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/contact">Contacts</Link>
      </nav>

      <MobileMenu />
    </header>
  )
}
