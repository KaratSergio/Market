import { FC } from 'react'
import { Link } from 'react-router-dom'

import { LoginForm } from '@features/auth'
import { RegisterForm } from '@features/auth'

export const ProfilePage: FC = () => {
  return (
    <div className="container flex flex-col items-center">
      <img src="/images/user.webp" alt="User Avatar" className="h-32 w-32 rounded-full" />
      <p className="mt-4 text-lg font-bold">USER PROFILE THERE</p>
      <Link className="text-center" to="/">
        Back to Main
      </Link>

      <div className="mt-20 flex gap-10">
        <LoginForm />
        <RegisterForm />
      </div>
    </div>
  )
}
