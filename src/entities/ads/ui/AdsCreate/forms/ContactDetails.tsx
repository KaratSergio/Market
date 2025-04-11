import { FC } from 'react'
import { Input } from '@shared/index'
import { useFormContext } from 'react-hook-form'
import { Ad } from '../../../model/types'

export const ContactDetails: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Ad>()

  return (
    <div className="flex w-[335px] flex-col gap-6 rounded-[16px] bg-neutral-100 p-2 md:w-[696px] md:p-[18px] xl:w-[1280px] xl:px-[88px] xl:py-[40px]">
      <h3 className="text-[24px] font-medium text-[color:var(--black)] md:text-[36px]">
        Your contact details
      </h3>
      <Input
        label="Contact person"
        name="contactPerson.name"
        register={register}
        placeholder="Enter your name"
        error={errors.contactPerson?.message}
      />
      <Input
        label="Email-address"
        type="email"
        name="contactPerson.email"
        register={register}
        placeholder="Enter your email"
        error={errors.contactPerson?.email?.message}
      />
      <Input
        label="Phone number"
        type="tel"
        name="contactPerson.phone"
        register={register}
        placeholder="Enter your phone"
        error={errors.contactPerson?.phone?.message}
      />
    </div>
  )
}
