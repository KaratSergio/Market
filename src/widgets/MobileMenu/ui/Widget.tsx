import { FC, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
        className={`fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
          isOpen ? 'scale-88 bg-transparent' : 'scale-100'
        }`}
      >
        {/* Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-full bg-white shadow-2xl transition-transform duration-500 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="mt-20 flex flex-col items-center space-y-6">
            <Link to="/" className="text-xl text-black" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/profile" className="text-xl text-black" onClick={toggleMenu}>
              Profile
            </Link>
            <Link to="/contact" className="text-xl text-black" onClick={toggleMenu}>
              Contacts
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}
