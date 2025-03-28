import { FC } from 'react'
import { Link } from 'react-router-dom'
import { MobileMenu } from '@widgets/index'
import { AuthButton } from '@features/index'

export const Header: FC = () => {
  return (
    <header className="container flex items-center justify-between pt-6">
      {/* LOGO */}
      <Link className="bg-gray-400 p-5 text-xl font-extrabold" to="/">
        MARKETO
      </Link>

      {/* NAVIGATION MENU (VISIBLE ON MEDIUM AND LARGER SCREENS) */}
      <nav className="hidden md:flex">
        <ul className="flex gap-8 leading-6 uppercase lg:text-2xl">
          <li className="hover-nav p-2">
            <Link className="hover-nav" to="/chat">
              Chat
            </Link>
          </li>
          <li className="hover-nav p-2">
            <Link className="hover-nav" to="/like">
              Favorites
            </Link>
          </li>
          <li className="hover-nav p-2">
            <Link className="hover-nav" to="/alerts">
              Alerts
            </Link>
          </li>
          <li className="hover-nav p-2">
            <Link className="hover-nav" to="/profile">
              Profile
            </Link>
          </li>
        </ul>
      </nav>

      {/* AUTH BUTTON (HIDDEN ON SMALL SCREENS) */}
      <AuthButton className="hidden md:block" />

      {/* MOBILE MENU (VISIBLE ONLY ON SMALL SCREENS) */}
      <MobileMenu />
    </header>
  )
}
