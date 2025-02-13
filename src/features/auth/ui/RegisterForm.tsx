import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema } from '../model/yupSchema'
import { RegisterFormInputs } from '../model/types'
import { Input } from '@shared/ui'
import { Button } from '@shared/ui'

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormInputs>({ resolver: yupResolver(registerSchema) })

  const handleFormSubmit = (data: RegisterFormInputs) => {
    console.log(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-4">
      <Input label="First Name" name="firstName" register={register} error={errors.firstName?.message} />
      <Input label="Last Name" name="lastName" register={register} error={errors.lastName?.message} />
      <Input label="Email" type="email" name="email" register={register} error={errors.email?.message} />
      <Input label="Phone" type="tel" name="phone" register={register} error={errors.phone?.message} />
      <Input label="Password" type="password" name="password" register={register} error={errors.password?.message} />
      <Button type="submit" variant="primary">
        Register
      </Button>
    </form>
  )
}
