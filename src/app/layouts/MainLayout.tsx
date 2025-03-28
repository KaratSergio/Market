import { FC, ReactNode } from 'react'
import { Layout } from '@shared/index'
import { Header, Footer } from '@widgets/index'

export const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Layout headerSlot={<Header />} footerSlot={<Footer />}>
      {children}
    </Layout>
  )
}
