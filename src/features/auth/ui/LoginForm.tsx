import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '../model/yupSchema'
import { LoginFormInputs } from '../model/types'
import { Input } from '@shared/ui'
import { Button } from '@shared/ui'
import { useAppDispatch } from '@shared/hooks/useRedux'
import { login } from '../api/authApi'

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
      className="flex flex-col gap-4"
    >
      <Input
        label="Email"
        type="email"
        name="email"
        register={register}
        error={errors.email?.message}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        register={register}
        error={errors.password?.message}
      />
      <Button type="submit" variant="primary">
        Login
      </Button>
    </form>
  )
}
