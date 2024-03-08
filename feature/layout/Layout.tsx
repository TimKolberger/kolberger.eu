import type { ComponentPropsWithoutRef } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export interface LayoutProps extends ComponentPropsWithoutRef<'div'> {}

export const Layout = ({ children, ...props }: LayoutProps) => (
  <div className="align-stretch flex min-h-screen flex-1 flex-col" {...props}>
    <Header />
    {children}
    <Footer />
  </div>
)
