import { Timeline, TimelineEvent } from './Timeline'
import { Link } from '../layout/Link'
import type { ReactNode } from 'react'

const data: JourneyStepProps[] = [
  {
    timeline: { from: '2021', to: 'now' },
    company: {
      name: 'DB Systel GmbH',
      url: 'https://www.dbsystel.de/dbsystel',
    },
    role: 'Maintainer',
    description: (
      <>
        As maintainer I develop libraries, templates and documentations in the
        frontend area for 10 product teams, which implement in-house
        applications for{' '}
        <Link href="https://www.deutschebahn.com/de">Deutsche Bahn</Link>. This
        includes the deployment and further development of a design system,
        authentication libraries and DevOps tooling.
      </>
    ),
  },
  {
    timeline: { from: '2020', to: '2023' },
    company: {
      name: 'Chakra UI',
      url: 'https://chakra-ui.com/',
    },
    role: 'Core Maintainer',
    description: (
      <>
        As a core maintainer, I contributed to the development of{' '}
        <Link href="https://chakra-ui.com">Chakra UI</Link> and helped to
        maintain the project. I was mostly involved in the styled system package
        and contributed to a great TypeScript experience.
      </>
    ),
  },
  {
    timeline: { from: '2020', to: '2021' },
    company: {
      name: 'DB Systel GmbH',
      url: 'https://www.dbsystel.de/dbsystel',
    },
    role: 'DevOps Engineer',
    description: (
      <>
        As a DevOps Engineer, I developed two frontend applications for DB
        Fernverkehr, visualising real-time data such as location-based data and
        arbitrary event data.
      </>
    ),
  },
  {
    timeline: { from: '2018', to: '2020' },
    company: {
      name: 'Incloud Engineering GmbH',
    },
    role: 'Senior Software Engineer and Teamlead',
    description: (
      <>
        My responsibilities were in new and further development of proprietary
        products. As lead developer, I maintained two plugin products in
        production and one SaaS product in ongoing development.
      </>
    ),
  },
  {
    timeline: { from: '2016', to: '2018' },
    company: {
      name: 'Incloud Engineering GmbH',
    },
    role: 'Web developer as Working Student',
    description: (
      <>
        In the agency business I got to know professional, individual software
        development with various technologies. PHP, JavaScript, jQuery, Vue,
        Ember, MySQL, MongoDB, React, TypeScript, Node.js, PostgreSQL, Docker,
        Kubernetes and more. Some of these technologies I still use today, some
        others not so much…
      </>
    ),
  },
]

type JourneyStepProps = {
  timeline: { from: string; to: string }
  company: { name: string; url?: string }
  role: ReactNode
  description: ReactNode
}

const JourneyStep = ({
  timeline: { from, to },
  company: { name, url },
  role,
  description,
}: JourneyStepProps) => {
  const company = url ? (
    <Link href={url} className="block text-sm text-gray-400">
      {name}
    </Link>
  ) : (
    <span className="block text-sm text-gray-400">{name}</span>
  )

  return (
    <article className="flex flex-col gap-2">
      <header className="text-sm text-gray-300">
        <span className="block text-xs text-gray-400">
          <time dateTime={from}>{from}</time> to {to}
        </span>
        {company}
        <p>{role}</p>
      </header>

      <p className="text-sm text-gray-400">{description}</p>
    </article>
  )
}
export const MyJourney = () => (
  <Timeline>
    {data.map((step, index) => (
      <TimelineEvent key={index}>
        <JourneyStep {...step} />
      </TimelineEvent>
    ))}
  </Timeline>
)
