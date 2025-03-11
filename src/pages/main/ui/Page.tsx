import { FC } from 'react'
import '@shared/app.css'
import { Category } from '@shared/ui/Category'
import { ListingList } from '../api/listingList'
import { Search } from '@shared/ui/Search'

export const MainPage: FC = () => {
  return (
    <>
      <Search />
      <Category />
      <ListingList />
    </>
  )
}
