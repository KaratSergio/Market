import { FC } from 'react'
import { Link } from 'react-router-dom'

export const ProfilePage: FC = () => {
  return (
    <div className="container mt-20 flex flex-col items-center">
      <img src="/images/user.webp" alt="User Avatar" className="h-32 w-32 rounded-full" />
      <p className="mt-4 text-lg font-bold">USER PROFILE THERE</p>

      <Link className="text-center" to="/">
        Back to Main
      </Link>

      <div className="mt-20 flex gap-10"></div>
    </div>
  )
}
