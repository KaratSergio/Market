import { FC } from 'react'
import { Link } from 'react-router-dom'

export const Footer: FC = () => {
  return (
    <footer className="container mt-10 bg-gray-300 p-6 sm:p-10">
      <div className="grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 sm:place-items-start">
        {/* LOGO */}
        <div className="flex w-auto flex-col items-center sm:items-start">
          <Link
            className="inline-block bg-gray-400 p-5 text-xl font-extrabold"
            to="/"
          >
            MARKETO
          </Link>
        </div>

        {/* NAVIGATION */}
        <nav aria-label="Footer Navigation" className="w-full">
          <ul className="grid grid-cols-1 gap-4 text-center sm:text-left lg:grid-cols-2 lg:text-2xl">
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/sell">How to sell & buy?</Link>
            </li>
            <li>
              <Link to="/paid">Paid services</Link>
            </li>
            <li>
              <Link to="/policy">Privacy Policy</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
