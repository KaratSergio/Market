import { FC, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@shared/ui'

export const MobileMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  return (
    <>
      <button
        className="z-50 flex h-8 w-8 flex-col items-center justify-center space-y-1 bg-transparent md:hidden"
        onClick={toggleMenu}
      >
        <div
          className={`h-1 w-6 bg-black transition-all duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''}`}
        ></div>
        <div className={`h-1 w-6 bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
        <div
          className={`h-1 w-6 bg-black transition-all duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}
        ></div>
      </button>

      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? 'pointer-events-auto scale-80 bg-gray-200' : 'pointer-events-none scale-100'
        }`}
      >
        {/* Menu */}
        <div
          className={`fixed top-0 right-0 flex h-full w-full flex-col items-center justify-around rounded-br-full bg-gray-400 p-20 shadow-2xl transition-transform duration-500 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col items-center space-y-6 text-3xl text-black uppercase" onClick={toggleMenu}>
            <Link to="/">Home</Link>
            <Link to="/Chat">Chat</Link>
            <Link to="/Like">Like</Link>
            <Link to="/Notifications">Notifications</Link>
            <Link to="/profile">Profile</Link>
          </nav>

          <Button variant="primary">Add an ad</Button>
        </div>
      </div>
    </>
  )
}
