import { FC } from 'react'
import { Link } from 'react-router-dom'
import { MobileMenu } from '@widgets/MobileMenu'
import { Button } from '@shared/ui'

export const Header: FC = () => {
  return (
    <header className="container flex items-center justify-between pt-6">
      <Link className="bg-gray-400 p-5 text-xl font-extrabold" to="/">
        MARKETO
      </Link>

      <nav className="hidden gap-8 md:flex">
        <Link to="/Chat">Chat</Link>
        <Link to="/Like">Like</Link>
        <Link to="/Notifications">Notifications</Link>
        <Link to="/profile">Your profile</Link>
      </nav>

      <Button className="hidden md:block" variant="primary">
        Add an ad
      </Button>

      <MobileMenu />
    </header>
  )
}
