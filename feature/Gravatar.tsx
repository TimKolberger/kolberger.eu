import * as React from 'react'
import md5 from 'blueimp-md5'

export interface GravatarProps
  extends Partial<Omit<React.ComponentProps<'img'>, 'src'>> {
  email: string
}

export const Gravatar = ({ email, ...restProps }: GravatarProps) => {
  const gravatarUrl = React.useMemo(
    () => `https://www.gravatar.com/avatar/${md5(email)}`,
    [email],
  )

  return (
    <img
      src={gravatarUrl}
      alt={email}
      width={40}
      height={40}
      className="rounded-full border-2 border-gray-200 shadow-xs"
      {...restProps}
    />
  )
}
