import { FC } from 'react'
import { Button } from '@shared/index'

export const Submit: FC = () => {
  return (
    <div className="flex w-[335px] flex-col items-center gap-4 rounded-[16px] bg-neutral-100 p-2 md:h-[160px] md:w-[696px] md:flex-row md:items-center md:justify-end md:gap-16 md:rounded-2xl md:bg-[#f5f5f5] md:p-9 md:pr-10 xl:w-[1280px]">
      <a
        href="#"
        className="text-[16px] font-medium text-black underline hover:text-gray-400 md:text-[32px]"
      >
        Preview
      </a>
      <Button
        type="submit"
        variant="tertiary"
        className="h-[57px] text-[16px] font-medium md:h-[87px] md:w-[197px] md:text-[32px]"
      >
        Publish
      </Button>
    </div>
  )
}
