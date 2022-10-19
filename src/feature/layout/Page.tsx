import * as React from 'react'
import { HTMLPandaProps, panda } from '@/design-system/jsx'
import { container } from '@/design-system/patterns'
import { cx } from '@/design-system/css'

export type PageProps = HTMLPandaProps<'main'>

export const Page = ({ className, ...props }: PageProps) => (
  <panda.main
    className={cx(container({}), className)}
    display="flex"
    flexDirection="column"
    w="full"
    maxWidth="4xl"
    flex="1 0 0"
    mx="auto"
    {...props}
  />
)
