import type { PropsWithChildren } from 'react'
import React from 'react'
import '../../styles/index.css'

const RootLayout = (props: PropsWithChildren) => (
  <html lang="en">
    <head>
      <title>Tim Kolberger</title>

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Personal site of Tim Kolberger" />
      <link rel="icon" href="/favicon.ico" />
    </head>
    <body>{props.children}</body>
  </html>
)

export default RootLayout
