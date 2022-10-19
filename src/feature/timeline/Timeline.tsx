import { ReactNode } from 'react'
import { panda } from '@/design-system/jsx'

export const Timeline = ({ children }: { children?: ReactNode }) => (
  <panda.ul listStyle="none" px="0" display="flex" flexDirection="column">
    {children}
  </panda.ul>
)

export const TimelineEvent = ({ children }: { children?: ReactNode }) => (
  <panda.li
    display="flex"
    flexDirection="column"
    pr="4"
    position="relative"
    css={{
      '--bubble-size': 'spacing.4',
      '--line-width': 'spacing.1',
      '--padding-left': 'spacing.4',
      '--padding-y': 'spacing.6',
      '--offset-y': 'calc(var(--padding-y) + 4px)',
      pl: 'calc(var(--bubble-size) + var(--padding-left))',
      py: 'var(--padding-y)',
    }}
    _before={{
      content: '""',
      display: 'block',
      position: 'absolute',
      height: 'var(--bubble-size)',
      width: 'var(--bubble-size)',
      top: 'var(--offset-y)',
      left: '0',
      bg: 'gray.50',
      borderRadius: 'full',
    }}
    _after={{
      content: '""',
      display: 'block',
      position: 'absolute',
      height: 'calc(100% - (var(--bubble-size) / 2))',
      width: 'var(--line-width)',
      top: 'calc(var(--bubble-size) + var(--offset-y))',
      left: '0',
      transform: 'translateX(calc(var(--bubble-size) / 2 - 50%))',
      bg: 'whiteAlpha.300',
    }}
    _lastOfType={{
      _after: { display: 'none' },
    }}
  >
    {children}
  </panda.li>
)
