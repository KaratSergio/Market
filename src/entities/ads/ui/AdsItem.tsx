import { FC } from 'react'
import { AdsItemProps } from '../model/types'

export const AdsItem: FC<AdsItemProps> = ({ ad }) => {
  return (
    <li className="mb-4 max-w-96 rounded-lg border p-4">
      {ad.images?.length > 0 && (
        <img
          src={ad.images[0].url}
          alt={ad.title}
          className="mb-4 h-auto w-auto rounded-lg object-cover"
        />
      )}

      <h3 className="text-xl font-semibold">{ad.title}</h3>
      <p className="text-gray-600">{ad.description}</p>
      <div className="mt-2 flex items-center justify-between">
        <span className="rounded-full bg-gray-400 px-2 text-lg font-bold">
          ${ad.price}
        </span>
      </div>
    </li>
  )
}
