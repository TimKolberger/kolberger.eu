import type { CSSProperties, ReactNode } from 'react'
import { clsx } from 'clsx'

export const Timeline = ({ children }: { children?: ReactNode }) => (
  <ul className="flex list-none flex-col px-0">{children}</ul>
)

export const TimelineEvent = ({ children }: { children?: ReactNode }) => (
  <li
    className={clsx(
      'relative flex flex-col pr-4',
      'pl-[calc(var(--bubble-size)+var(--padding-left))]',
      'py-[var(--padding-y)]',
      'after:bg-opacity-20 after:absolute after:top-[calc(var(--bubble-size)+var(--offset-y))] after:left-0 after:block after:h-[calc(100%-(var(--bubble-size)/2))] after:w-[var(--line-width)] after:translate-x-[calc((var(--bubble-size)/2)-50%)] after:bg-gray-50 last-of-type:after:hidden',
      'before:absolute before:top-[var(--offset-y)] before:left-0 before:block before:h-[var(--bubble-size)] before:w-[var(--bubble-size)] before:rounded-full before:border before:border-solid before:border-transparent before:bg-gray-50',
    )}
    style={
      {
        '--bubble-size': '1rem',
        '--line-width': '0.25rem',
        '--padding-left': '1rem',
        '--padding-y': '1.5rem',
        '--offset-y': 'calc(var(--padding-y) + 4px)',
      } as CSSProperties
    }
  >
    {children}
  </li>
)
