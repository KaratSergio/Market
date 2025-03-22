import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '../model/yupSchema'
import { LoginFormInputs } from '../model/types'
import { Input } from '@shared/ui'
import { Button } from '@shared/ui'
import { useAppDispatch } from '@shared/hooks/useRedux'
import { login } from '../api/authApi'
import { FaApple } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

export const LoginForm: FC = () => {
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormInputs>({ resolver: yupResolver(loginSchema) })

  const handleFormSubmit = (data: LoginFormInputs) => {
    dispatch(login(data))
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="mx-auto flex w-full max-w-[335px] flex-col lg:max-w-90"
    >
      <p className="mb-8 text-base font-normal text-gray-400">Login to your profile</p>
      <div className="flex flex-col gap-5">
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          register={register}
          error={errors.email?.message}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          showPasswordToggle={true}
          placeholder="Enter your password"
          register={register}
          error={errors.password?.message}
        />
      </div>
      <div className="mt-5 flex flex-col gap-2.5">
        <Button type="submit" variant="tertiary">
          Login
        </Button>
        <Button type="button" variant="secondary">
          <FcGoogle />
          &nbsp;Sign up with Google
        </Button>
        <Button type="button" variant="secondary">
          <FaApple />
          &nbsp;Sign up with Apple
        </Button>
      </div>
    </form>
  )
}
