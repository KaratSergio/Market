import { FC, useEffect } from 'react'
import { getAdsList } from '../api/adsApi'
import { selectAds, selectIsLoading } from '../api/adsSelectors'
import { useAppDispatch, useAppSelector } from '@shared/index'
import { AdsItem } from './AdsItem'

export const AdsList: FC = () => {
  const dispatch = useAppDispatch()
  const ads = useAppSelector(selectAds)
  const isLoading = useAppSelector(selectIsLoading)

  useEffect(() => {
    dispatch(getAdsList())
  }, [dispatch])

  if (isLoading) {
    return (
      <div className="flex h-40 items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      </div>
    )
  }

  return (
    <ul className="flex flex-wrap justify-center gap-6">
      {ads.map((ad) => (
        <AdsItem key={ad.id} ad={ad} />
      ))}
    </ul>
  )
}
