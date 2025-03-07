import { FC } from 'react'
import '@shared/app.css'
import { Category } from './Category'
import { ProductsList } from './ProductsList'
import { Search } from './Search'

export const MainPage: FC = () => {
  return (
    <>
      <Search />
      <Category />
      <ProductsList />
    </>
  )
}
