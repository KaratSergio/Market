import { FC } from 'react'
import { Textarea } from '@shared/index'
import { useFormContext } from 'react-hook-form'
import { Ad } from '../../../model/types'

export const Description: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Ad>()

  return (
    <div className="flex w-[335px] flex-col gap-5 rounded-[16px] bg-neutral-100 p-2 md:w-[696px] md:p-[18px] xl:w-[1280px] xl:px-[88px] xl:py-[40px]">
      <h3 className="text-[24px] font-medium text-[color:var(--black)] md:text-[36px]">
        Description
      </h3>
      <Textarea
        name="description"
        className="h-[280px] w-full xl:h-[534px] xl:w-[1100px]"
        register={register}
        placeholder="Add a description of your ad"
        error={errors.description?.message}
      />
      <p className="mb-10 text-[24px] font-medium text-gray-400">
        Please enter at least 40 characters
      </p>
    </div>
  )
}
