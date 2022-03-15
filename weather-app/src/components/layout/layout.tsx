import React from 'react'
import { LayoutWrapper } from './layoutStyles';

interface ILayout {
  children: React.ReactNode
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
  )
}

export default Layout;