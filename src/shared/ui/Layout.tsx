import { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

type Props = {
  headerSlot: ReactNode
  footerSlot: ReactNode
  children: ReactNode
}

type LayoutProps = Partial<Props>

export const Layout: FC<LayoutProps> = ({ headerSlot, footerSlot, children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      {headerSlot}
      <div className="flex flex-1 ">
        <div className="flex flex-col grow">{children || <Outlet />}</div>
      </div>
      {footerSlot}
    </div>
  )
}

export default Layout
