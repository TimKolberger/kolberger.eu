import type { ComponentPropsWithoutRef } from 'react'

export interface FooterProps extends ComponentPropsWithoutRef<'footer'> {}

export const Footer = ({ className, ...props }: FooterProps) => (
  <footer {...props}>
    <div className=" align-stretch text-subtle mx-auto flex w-full max-w-4xl flex-1 flex-col px-4 py-4 text-sm">
      All rights reserved © Tim Kolberger {new Date().getFullYear()}
    </div>
  </footer>
)
