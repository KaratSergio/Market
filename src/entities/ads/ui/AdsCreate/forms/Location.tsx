import { FC } from 'react'
import { Select } from '@shared/index'
import { useFormContext } from 'react-hook-form'
import { Ad } from '../../../model/types'

const LOCATION = [
  'New York City',
  'Los Angeles',
  'Chicago',
  'Philadelphia',
  'San Antonio',
]

export const Location: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Ad>()

  return (
    <div className="flex w-[335px] flex-col gap-6 rounded-[16px] bg-neutral-100 p-2 md:w-[696px] md:p-[18px] xl:w-[1280px] xl:px-[88px] xl:py-[40px]">
      <Select
        label="Location"
        name="location"
        options={LOCATION}
        placeholder="Сhoose a district"
        register={register}
        error={errors.location?.message}
      />
    </div>
  )
}
