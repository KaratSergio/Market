import { FC } from 'react'
import { Switch } from '@shared/index'
import { useFormContext } from 'react-hook-form'
import { Ad } from '../../../model/types'

export const AutoContinue: FC = () => {
  const { register } = useFormContext<Ad>()

  return (
    <div className="flex w-[335px] items-center gap-10 rounded-[16px] bg-neutral-100 p-2 md:w-[696px] md:p-[18px] xl:w-[1280px] xl:px-[88px] xl:py-[40px]">
      <div>
        <h3 className="text-[24px] font-medium text-[color:var(--black)] md:text-[36px]">
          Auto-continue
        </h3>
        <p className="text-[16px] font-normal text-gray-400">
          The ad will be deactivated after 30 days
        </p>
      </div>
      <Switch name="autoContinue" register={register} />
    </div>
  )
}
