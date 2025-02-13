import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { appStore, persistedStore } from '../appStore'

interface StoreProviderProps {
  children: ReactNode
}

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  return (
    <Provider store={appStore}>
      <PersistGate loading={null} persistor={persistedStore}>
        {children}
      </PersistGate>
    </Provider>
  )
}
