import { FC } from 'react'
import { AdsList } from '@entities/ads'
import { SearchInput } from '@features/search'

const listItemClass =
  'p-2 flex items-center justify-center size-32 border-gray-200 border-[4px] rounded-full text-lg cursor-pointer transition-all duration-300 hover:bg-gray-200'

export const MainPage: FC = () => {
  return (
    <div className="container mt-10 flex flex-col items-center justify-center text-center">
      <SearchInput />

      <ul className="my-20 flex max-w-[992px] flex-wrap justify-center gap-4">
        <li className={listItemClass}>Help</li>
        <li className={listItemClass}>Children's World</li>
        <li className={listItemClass}>Real Estate</li>
        <li className={listItemClass}>Cars</li>
        <li className={listItemClass}>Animals</li>
        <li className={listItemClass}>Home & Garden</li>
        <li className={listItemClass}>Electronics</li>
        <li className={listItemClass}>Business & Services</li>
        <li className={listItemClass}>Rent & Hire</li>
        <li className={listItemClass}>Fashion & Style</li>
        <li className={listItemClass}>Hobbies & Sports</li>
        <li className={listItemClass}>Giveaway</li>
        <li className={listItemClass}>Exchange</li>
        <li className={listItemClass}>Gamer Goods</li>
      </ul>

      <AdsList />
    </div>
  )
}
