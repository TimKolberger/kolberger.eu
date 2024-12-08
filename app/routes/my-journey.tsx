import { Layout } from '../../feature/layout/Layout'
import { Page } from '../../feature/layout/Page'
import { Link } from '../../feature/layout/Link'
import { MyJourney } from '../../feature/timeline/MyJourney'
import type { MetaFunction } from 'react-router'

export const meta: MetaFunction = () => {
  return [
    { title: 'My journey | Tim Kolberger' },
    { name: 'description', content: 'Personal site of Tim Kolberger' },
  ]
}
const MyJourneyPage = () => (
  <Layout>
    <Page className="gap-12">
      <header>
        <h2 className="font-heading text-5xl font-bold md:text-7xl">
          My journey
        </h2>
      </header>

      <div className="max-w-60ch mx-auto flex flex-col gap-2">
        <p>
          After graduating in Computer Science in 2018, I continued learning at
          an agency startup and currently are working for the digital partner of
          Deutsche Bahn.
        </p>
        <p>
          When I started working on design systems and component libraries, I
          got into Open Source and joined the{' '}
          <Link href="https://chakra-ui.com">Chakra UI</Link> core team where I
          learned a ton and got to work with some amazing and smart people.
        </p>
      </div>

      <div className="max-w-60ch mx-auto w-full">
        <MyJourney />
      </div>
    </Page>
  </Layout>
)

export default MyJourneyPage
