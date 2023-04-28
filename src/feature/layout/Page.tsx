import type { ComponentPropsWithoutRef } from 'react'
import * as React from 'react'
import cx from 'classnames'

export type PageProps = ComponentPropsWithoutRef<'main'>

export const Page = (props: PageProps) => {
  const { className, ...rest } = props
  return (
    <main
      className={cx(
        'align-stretch mx-auto flex w-full max-w-4xl flex-1 flex-col px-4',
        className
      )}
      {...rest}
    />
  )
}
