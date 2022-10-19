import * as React from 'react'
import md5 from 'blueimp-md5'
import { css } from '@/design-system/css'
import Image from 'next/image'

export interface GravatarProps
  extends Partial<Omit<React.ComponentProps<typeof Image>, 'src'>> {
  email: string
}

export const Gravatar = ({ email, ...restProps }: GravatarProps) => {
  const gravatarUrl = React.useMemo(
    () => `https://www.gravatar.com/avatar/${md5(email)}`,
    [email]
  )

  return (
    <Image
      src={gravatarUrl}
      alt={email}
      width={40}
      height={40}
      className={css({
        width: '10',
        height: '10',
        borderRadius: '9999px',
        borderColor: 'text.subtle',
        borderWidth: '2px',
        shadow: 'sm',
      })}
      {...restProps}
    />
  )
}
