import { FC } from 'react'
import '@shared/app.css'

export const MainPage: FC = () => {
  return (
    <div className="container text-center">
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
  )
}
