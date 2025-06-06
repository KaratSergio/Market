import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema } from '../model/yupSchema'
import { RegisterFormInputs } from '../model/types'
import { Button, Input, useAppDispatch } from '@shared/index'
import { register } from '../api/authApi'
import { FaApple } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from "react-router-dom"; 

export const RegisterForm: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormInputs>({ resolver: yupResolver(registerSchema) })

 const handleFormSubmit = async (data: RegisterFormInputs) => {
    const result = await dispatch(register(data));

    if (result.meta.requestStatus === "fulfilled") {
      navigate("/auth?tab=login");
    }

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="mx-auto flex w-full max-w-[335px] flex-col lg:max-w-90"
    >
      <p className="mb-8 text-base font-normal text-gray-400">
        Register on our platform
      </p>
      <div className="flex flex-col gap-5">
        <Input
          label="Name"
          name="name"
          placeholder="User name"
          register={formRegister}
          error={errors.name?.message}
        />

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
      </div>

      <div className="mt-5 flex flex-col gap-2.5">
        <Button type="submit" variant="primary">
          Create an account
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
