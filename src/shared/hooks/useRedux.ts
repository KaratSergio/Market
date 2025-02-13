import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { AppDispatch } from '@app/appStore'
import { RootState } from '@app/rootReducer'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
