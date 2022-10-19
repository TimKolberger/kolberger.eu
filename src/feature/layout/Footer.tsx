import * as React from 'react'
import { Container, panda } from '@/design-system/jsx'

export interface FooterProps extends React.ComponentProps<'footer'> {}

export const Footer = ({ className, ...props }: FooterProps) => (
  <panda.footer {...props}>
    <Container textStyle="sm" py="4" color="text.subtle">
      All rights reserved © Tim Kolberger {new Date().getFullYear()}
    </Container>
  </panda.footer>
)
