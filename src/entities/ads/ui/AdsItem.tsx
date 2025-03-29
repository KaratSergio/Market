import { FC } from 'react'
import { AdsItemProps } from '../model/types'
import { getAdStatus, getAdDayLeft } from '@shared/index'

export const AdsItem: FC<AdsItemProps> = ({ ad }) => {
  return (
    <li className="mb-4 w-full max-w-[320px]">
      {/* IMAGE */}
      {ad.images?.length > 0 && (
        <div className="flex aspect-square h-auto max-h-[320px] w-full max-w-[320px] items-center justify-center overflow-hidden rounded-lg">
          <img
            src={ad.images[0].url}
            alt={ad.title}
            className="h-full w-full object-contain"
          />
        </div>
      )}

      {/* DESCRIPTION */}
      <div className="px-4">
        <h3 className="my-2 text-start text-lg font-medium">
          {ad.title.length > 60 ? ad.title.slice(0, 60) + '...' : ad.title}
        </h3>
        <div className="flex items-center">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.666626 8.00008C0.666626 3.94999 3.94987 0.666748 7.99996 0.666748C12.05 0.666748 15.3333 3.94999 15.3333 8.00008C15.3333 12.0502 12.05 15.3334 7.99996 15.3334C3.94987 15.3334 0.666626 12.0502 0.666626 8.00008ZM8.66663 4.00008C8.66663 3.63189 8.36815 3.33341 7.99996 3.33341C7.63177 3.33341 7.33329 3.63189 7.33329 4.00008V8.00008C7.33329 8.2526 7.47596 8.48344 7.70182 8.59637L10.3685 9.9297C10.6978 10.0944 11.0983 9.96088 11.2629 9.63156C11.4276 9.30224 11.2941 8.90179 10.9648 8.73713L8.66663 7.58806V4.00008Z"
                fill="#272725"
              />
            </svg>
            {getAdDayLeft(ad.updatedAt)}
          </div>
          <div className="ml-2 border-l-2 border-l-gray-400 pl-2 leading-4">
            <p className="text-green-500">98% successful sales</p>
          </div>
        </div>
        <p className="my-2 text-start text-gray-600">
          {ad.description.length > 60
            ? ad.description.slice(0, 60) + '...'
            : ad.description}
        </p>
        {/* INFO */}
        <div className="mt-4 flex items-center gap-2">
          <span className="rounded-full border border-gray-400 px-2 py-1 text-center text-sm leading-tight font-medium text-neutral-800">
            ${ad.price}
          </span>
          <span className="rounded-full bg-green-100 px-2 py-1 text-sm font-medium">
            {getAdStatus(ad.updatedAt)}
          </span>
          <span className="rounded-full bg-indigo-100 px-2 py-1 text-sm font-medium">
            {ad.location}
          </span>
        </div>
      </div>
    </li>
  )
}
