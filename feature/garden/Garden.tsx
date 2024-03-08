import { Link } from '../layout/Link'
import type { ReactNode } from 'react'
import { IconExternalLink, IconGitHub } from '../icons/icons.tsx'

const data: ProjectProps[] = [
  {
    name: 'Docusaurus Plugin Stucturizr',
    url: 'https://timkolberger.github.io/docusaurus-plugin-structurizr',
    github: 'https://github.com/TimKolberger/docusaurus-plugin-structurizr',
    description: (
      <>
        This plugin allows you to use{' '}
        <Link href="https://structurizr.com/" className="underline">
          Structurizr
        </Link>{' '}
        diagrams in your{' '}
        <Link href="https://docusaurus.io/" className="underline">
          Docusaurus
        </Link>{' '}
        documentation.
      </>
    ),
  },
  {
    name: 'SK0R',
    url: 'https://sk0r.vercel.app',
    github: 'https://github.com/TimKolberger/skor',
    description: (
      <>A digital card game board for Canasta, Rummy and many other games.</>
    ),
  },
]

type ProjectProps = {
  name: ReactNode
  url: string
  github?: string
  description: ReactNode
}

const ProjectItem = ({ name, url, github, description }: ProjectProps) => {
  const title = <span className="block text-xl">{name}</span>

  const formatUrl = (url: string) => {
    const { host, pathname } = new URL(url)
    return `${host}${pathname}`
  }

  const links = (
    <p className="flex flex-col items-start gap-2 py-2">
      {url && (
        <Link href={url} className="text-sm text-gray-400">
          <IconExternalLink className="me-1" />
          {formatUrl(url)}
        </Link>
      )}
      {github && (
        <Link href={github} className="text-sm text-gray-400">
          <IconGitHub className="me-1" />
          {formatUrl(github)}
        </Link>
      )}
    </p>
  )

  return (
    <article className="flex flex-col gap-2">
      <header>{title}</header>
      <p className="text-sm text-gray-400">{description}</p>
      {links}
    </article>
  )
}
export const Garden = () => (
  <ul className="flex flex-col gap-12">
    {data.map((step, index) => (
      <li key={index}>
        <ProjectItem {...step} />
      </li>
    ))}
  </ul>
)
