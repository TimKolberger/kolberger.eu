import type { ComponentPropsWithoutRef } from 'react'
import { Link } from './Link.tsx'
import { IconGitHub } from '../icons/icons.tsx'

export interface FooterProps extends ComponentPropsWithoutRef<'footer'> {}

export const Footer = ({ className, ...props }: FooterProps) => (
  <footer {...props}>
    <div className="align-stretch text-subtle mx-auto flex w-full max-w-4xl flex-1 px-4 py-4 text-sm">
      <span>
        All rights reserved © Tim Kolberger {new Date().getFullYear()}
      </span>
      <div className="ms-auto">
        <Link
          href="https://github.com/TimKolberger/kolberger.eu"
          className="rounded-full p-2 text-gray-400 hover:bg-gray-50/5"
        >
          <IconGitHub />
          <div className="sr-only">Open Source on GitHub</div>
        </Link>
      </div>
    </div>
  </footer>
)
