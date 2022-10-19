import * as React from 'react'
import { Container, HTMLPandaProps, panda } from '@/design-system/jsx'
import { Link } from './Link'
import { Gravatar } from '../Gravatar'

export type HeaderProps = HTMLPandaProps<'header'>

export const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <panda.header {...props}>
      <Container py="5" display="flex" alignItems="center" gap="3">
        <Link textStyle="lg" href="/">
          <Gravatar email="tim@kolberger.eu" />
        </Link>
        <panda.div
          flex="1"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Link href="/my-journey">My journey</Link>
        </panda.div>
      </Container>
    </panda.header>
  )
}
