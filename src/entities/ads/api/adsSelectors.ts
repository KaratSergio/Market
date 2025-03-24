import { RootState } from '@app/rootReducer'

export const selectAds = (state: RootState) => state.ads.ads
export const selectIsLoading = (state: RootState) => state.ads.isLoading
export const selectError = (state: RootState) => state.ads.error
