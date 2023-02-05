import type { PropsWithChildren } from 'react'
import React from 'react'
import '../../styles/index.css'

const RootLayout = (props: PropsWithChildren) => (
  <html lang="en">
    <head>
      <title>Tim Kolberger</title>

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Personal site of Tim Kolberger" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="icon" href="/favicon.ico" />
    </head>
    <body>{props.children}</body>
  </html>
)

export default RootLayout
