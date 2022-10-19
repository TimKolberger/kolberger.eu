import * as React from 'react'
import { css } from '@/design-system/css'
import { Header } from './Header'
import { Footer } from './Footer'

export interface LayoutProps extends React.ComponentProps<'div'> {}

export const Layout = ({ children, ...props }: LayoutProps) => (
  <div
    className={css({
      flex: '1 0 0',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      alignItems: 'stretch',
    })}
    {...props}
  >
    <Header />
    {children}
    <Footer />
  </div>
)
