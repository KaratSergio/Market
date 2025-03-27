import { FC, ReactNode } from 'react'
import { Layout } from '@shared/ui'
import { Header } from '@widgets/Header'
import { Footer } from '@widgets/Footer'

export const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Layout headerSlot={<Header />} footerSlot={<Footer />}>
      {children}
    </Layout>
  )
}
