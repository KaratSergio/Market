import { FC } from 'react'
import { Link } from 'react-router-dom'

export const Header: FC = () => {
  return (
    <header className="container flex items-center justify-between bg-amber-600 p-4 text-white">
      <strong className="text-xl font-bold">Logotype</strong>
      <Link className="flex items-center gap-4" to="/profile">
        <p className="text-sm">proFILE</p>
        <img src="/images/user.webp" alt="User Avatar" className="h-10 w-10 rounded-full" />
      </Link>
    </header>
  )
}
