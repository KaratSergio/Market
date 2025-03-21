import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema } from '../model/yupSchema'
import { RegisterFormInputs } from '../model/types'
import { Input } from '@shared/ui'
import { Button } from '@shared/ui'
import { useAppDispatch } from '@shared/hooks/useRedux'
import { register } from '../api/authApi'
import { FaApple } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

export const RegisterForm: FC = () => {
  const dispatch = useAppDispatch()
  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormInputs>({ resolver: yupResolver(registerSchema) })

  const handleFormSubmit = (data: RegisterFormInputs) => {
    dispatch(register(data))
    reset()
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-5">
      <p className="mb-8 text-base font-normal text-gray-400">Register on our platform</p>
      <Input label="Name" name="name" placeholder="User name" register={formRegister} error={errors.name?.message} />

      <Input
        label="Email"
        type="email"
        name="email"
        placeholder="Enter your email"
        register={formRegister}
        error={errors.email?.message}
      />

      <Input
        label="Password"
        type="password"
        name="password"
        showPasswordToggle={true}
        placeholder="Create a password"
        register={formRegister}
        error={errors.password?.message}
      />
      <div className="flex flex-col gap-2.5">
        <Button type="submit" variant="tertiary" className="">
          Create an account
        </Button>
        <Button type="button" variant="secondary" className="">
          <FcGoogle />
          &nbsp;Sign up with Google
        </Button>
        <Button type="button" variant="secondary" className="">
          <FaApple />
          &nbsp;Sign up with Apple
        </Button>
      </div>
    </form>
  )
}
