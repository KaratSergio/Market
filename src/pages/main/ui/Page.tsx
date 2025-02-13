import { FC } from 'react'
import '@shared/app.css'
import { Link } from 'react-router-dom'

export const MainPage: FC = () => {
  return (
    <>
      <div className="container mt-10 text-center">
        <Link className="mx-auto" to="/profile">
          <img src="/images/user.webp" alt="User Avatar" className="h-10 w-10 rounded-full" />
        </Link>
        <h1 className="font-serif text-2xl md:text-5xl">
          <span className="market-word">
            <span className="letter">M</span>
            <span className="letter">A</span>
            <span className="letter">R</span>
            <span className="letter">K</span>
            <span className="letter">E</span>
            <span className="letter">T</span>
          </span>
        </h1>
        <p className="typing-effect text-base md:text-2xl">
          Marketplace team challenge
          <span className="cursor">!</span>
        </p>
      </div>
    </>
  )
}
