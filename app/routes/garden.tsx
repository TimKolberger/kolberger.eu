import { Layout } from '../../feature/layout/Layout'
import { Page } from '../../feature/layout/Page'
import type { MetaFunction } from 'react-router'
import { Garden } from '../../feature/garden/Garden.tsx'

export const meta: MetaFunction = () => {
  return [
    { title: 'Garden | Tim Kolberger' },
    { name: 'description', content: 'Personal site of Tim Kolberger' },
  ]
}
const MyJourneyPage = () => (
  <Layout>
    <Page className="gap-12">
      <header>
        <h2 className="font-heading text-5xl font-bold md:text-7xl">Garden</h2>
      </header>

      <div className="max-w-60ch mx-auto flex w-full flex-col gap-2">
        <p>
          My software garden is a collection of projects I have worked on over
          the years.
        </p>
      </div>

      <div className="max-w-60ch mx-auto w-full">
        <Garden />
      </div>
    </Page>
  </Layout>
)

export default MyJourneyPage
