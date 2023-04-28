'use client'
import cx from 'classnames'
import { type ComponentPropsWithoutRef, forwardRef } from 'react'
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

export type LinkProps = ComponentPropsWithoutRef<'a'> & NextLinkProps

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  props,
  ref
) {
  const pathname = usePathname()
  const externalLinkProps = props.href.startsWith('http')
    ? { target: '_blank', rel: 'noopener' }
    : {}

  const isCurrent = pathname === props.href
  return (
    <NextLink href={props.href} passHref legacyBehavior>
      <a
        ref={ref}
        {...props}
        {...externalLinkProps}
        aria-current={isCurrent ? 'page' : undefined}
        className={cx(
          'cursor-pointer focus:outline-none focus-visible:underline',
          isCurrent ? 'underline' : 'no-underline',
          props.className
        )}
      />
    </NextLink>
  )
})
