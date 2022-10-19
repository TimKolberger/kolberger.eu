import { Timeline, TimelineEvent } from './Timeline'
import { panda } from '@/design-system/jsx'
import { Link } from '../layout/Link'

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
    timeline: { from: '2020', to: 'now' },
    company: {
      name: 'Chakra UI',
      url: 'https://chakra-ui.com/',
    },
    role: 'Core Maintainer',
    description: (
      <>
        As a core maintainer, I contribute to the development of{' '}
        <Link href="https://chakra-ui.com">Chakra UI</Link> and help to maintain
        the project. I am mostly involved in the styled system package and
        contributed some TypeScript gymnastics.
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
  role: React.ReactNode
  description: React.ReactNode
}

const JourneyStep = ({
  timeline: { from, to },
  company: { name, url },
  role,
  description,
}: JourneyStepProps) => {
  const company = url ? (
    <Link
      href={url}
      css={{
        display: 'block',
        textStyle: 'sm',
        color: 'text.subtle',
      }}
    >
      {name}
    </Link>
  ) : (
    <panda.span
      css={{
        display: 'block',
        textStyle: 'sm',
        color: 'text.subtle',
      }}
    >
      {name}
    </panda.span>
  )

  return (
    <panda.article display="flex" flexDirection="column" gap="2">
      <header>
        <panda.span
          textStyle="xs"
          color="text.subtle"
          borderColor="text.subtle"
        >
          <time dateTime={from}>{from}</time> to {to}
        </panda.span>
        {company}
        <panda.p>{role}</panda.p>
      </header>

      <panda.p color="text.subtle">{description}</panda.p>
    </panda.article>
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
