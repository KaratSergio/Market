import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '../model/yupSchema'
import { LoginFormInputs } from '../model/types'
import { Input } from '@shared/ui'
import { Button } from '@shared/ui'

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormInputs>({ resolver: yupResolver(loginSchema) })

  const handleFormSubmit = (data: LoginFormInputs) => {
    console.log(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-4">
      <Input label="Email" type="email" name="email" register={register} error={errors.email?.message} />
      <Input label="Password" type="password" name="password" register={register} error={errors.password?.message} />
      <Button type="submit" variant="primary">
        Login
      </Button>
    </form>
  )
}
