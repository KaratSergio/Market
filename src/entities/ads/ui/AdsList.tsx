import { FC, useEffect } from 'react'
import { getAdsList } from '../api/adsApi'
import { selectAds } from '../api/adsSelectors'
import { useAppDispatch, useAppSelector } from '@shared/hooks/useRedux'
import { AdsItem } from './AdsItem'

export const AdsList: FC = () => {
  const dispatch = useAppDispatch()
  const ads = useAppSelector(selectAds)

  useEffect(() => {
    dispatch(getAdsList())
  }, [dispatch])

  return (
    <ul className="flex flex-wrap justify-center gap-6">
      {ads.map((ad) => (
        <AdsItem key={ad.id} ad={ad} />
      ))}
    </ul>
  )
}
