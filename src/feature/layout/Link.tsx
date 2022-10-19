'use client'
import { HTMLPandaProps, panda } from '@/design-system/jsx'
import { forwardRef } from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

export type LinkProps = HTMLPandaProps<'a'> & NextLinkProps

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  props,
  ref
) {
  const pathname = usePathname()
  const externalLinkProps = props.href.startsWith('http')
    ? { target: '_blank', rel: 'noopener' }
    : {}

  return (
    <NextLink href={props.href} passHref legacyBehavior>
      <panda.a
        ref={ref}
        {...props}
        {...externalLinkProps}
        aria-current={pathname === props.href ? 'page' : undefined}
        css={{
          color: 'text.inverted',
          transitionProperty: 'base',
          transitionDuration: '100',
          transitionTimingFunction: 'ease-out',
          cursor: 'pointer',
          textDecoration: 'none',
          outline: 'none',
          _focusVisible: {
            boxShadow: 'outline',
          },
          _currentPage: {
            textDecoration: 'underline',
          },
          ...props.css,
        }}
      />
    </NextLink>
  )
})
