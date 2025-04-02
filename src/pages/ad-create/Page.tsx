import { FC } from 'react'
import {AdsCreate} from '@entities/index'

export const CreatePage: FC = () => {
  return (
    <div className='container'>
      <h2 className="m-4 ml-0 text-[36px] font-semibold">Create an ad</h2>
      <AdsCreate/>
    </div>
  )
}
