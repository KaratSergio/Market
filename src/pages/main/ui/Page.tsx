import { FC } from 'react'
import { AdsList } from '@entities/index'
import { SearchInput } from '@features/index'
import { FAQSection, BannerMarketo } from '@widgets/index'

const listItemClass =
  'p-2 flex items-center justify-center size-32 border-gray-200 border-[4px] rounded-full text-lg cursor-pointer transition-all duration-300 hover:bg-gray-200'

export const MainPage: FC = () => {
  return (
    <div className="container mt-10 flex flex-col items-center justify-center text-center">
      <SearchInput />

      <h1 className="mt-20 mb-12 tracking-[6px] uppercase lg:text-4xl">
        Categories
      </h1>

      <ul className="mb-20 flex max-w-[992px] flex-wrap justify-center gap-4">
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

      <h2 className="mb-12 tracking-[6px] uppercase lg:text-4xl">Hot offers</h2>

      <AdsList />

      <BannerMarketo />

      <FAQSection />
    </div>
  )
}
