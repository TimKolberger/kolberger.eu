import type { NextPage } from 'next'
import { panda } from '@/design-system/jsx'
import { Layout } from '../../feature/layout/Layout'
import { Page } from '../../feature/layout/Page'
import { Link } from '../../feature/layout/Link'
import { MyJourney } from '../../feature/timeline/MyJourney'

const MyJourneyPage: NextPage = () => (
  <Layout>
    <Page css={{ gap: '12' }}>
      <header>
        <panda.h2
          textStyle={{ base: '5xl', lg: '7xl' }}
          fontFamily="heading"
          fontWeight="bold"
        >
          My journey
        </panda.h2>
      </header>

      <panda.div
        textStyle={{ base: 'lg', lg: 'xl' }}
        display="flex"
        flexDirection="column"
        gap="2"
        maxW="60ch"
        mx="auto"
      >
        <panda.p>
          After graduating in Computer Science in 2018, I continued learning at
          an agency startup and now are working for the digital partner of
          Deutsche Bahn. I am helping to ensure that the trains are more
          punctual - eventually.
        </panda.p>
        <panda.p>
          When I started working on design systems and component libraries, I
          got into OpenSource and joined the{' '}
          <Link href="https://chakra-ui.com">Chakra UI</Link> core team where we
          work on the next generation of frontend tools.
        </panda.p>
      </panda.div>

      <panda.div maxW="60ch" mx="auto">
        <MyJourney />
      </panda.div>
    </Page>
  </Layout>
)

export default MyJourneyPage
