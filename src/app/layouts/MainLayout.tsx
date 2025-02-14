import { FC, ReactNode } from 'react'
import { Layout } from '@shared/ui'
import { Header } from '@widgets/Header'

export const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Layout headerSlot={<Header />} footerSlot={null}>
      {children}
    </Layout>
  )
}
