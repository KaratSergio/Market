import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema } from '../model/yupSchema'
import { RegisterFormInputs } from '../model/types'
import { Input } from '@shared/ui'
import { Button } from '@shared/ui'
import { useAppDispatch } from '@shared/hooks/useRedux'
import { register } from '../api/authApi'

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
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col gap-4"
    >
      <Input
        label="Nickname"
        name="name"
        register={formRegister}
        error={errors.name?.message}
      />

      <Input
        label="Email"
        type="email"
        name="email"
        register={formRegister}
        error={errors.email?.message}
      />

      <Input
        label="Password"
        type="password"
        name="password"
        register={formRegister}
        error={errors.password?.message}
      />

      <Button type="submit" variant="primary">
        Register
      </Button>
    </form>
  )
}
