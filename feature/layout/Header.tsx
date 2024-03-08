import type { ComponentPropsWithoutRef } from 'react'
import { Link } from './Link'
import { Gravatar } from '../Gravatar'

export type HeaderProps = ComponentPropsWithoutRef<'header'>

export const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <header {...props}>
      <div className="max-w-8xl mx-auto flex items-center gap-3 px-4 py-10 md:px-6">
        <Link href="/">
          <Gravatar email="tim@kolberger.eu" />
        </Link>
        <div className="flex flex-1 items-center justify-end gap-6">
          <Link href="/garden">Garden</Link>
          <Link href="/my-journey">My journey</Link>
        </div>
      </div>
    </header>
  )
}
