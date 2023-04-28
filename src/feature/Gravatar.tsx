import * as React from 'react'
import md5 from 'blueimp-md5'
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
      className="rounded-full border-2 border-gray-200 shadow-sm"
      {...restProps}
    />
  )
}
