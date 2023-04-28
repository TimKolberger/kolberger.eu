import { Layout } from '../feature/layout/Layout'
import { Page } from '../feature/layout/Page'
import { Link } from '../feature/layout/Link'
import { FaMastodon } from 'react-icons/fa'
import { FiMail, FiTwitter } from 'react-icons/fi'

const HomePage = () => (
  <Layout>
    <Page>
      <section className="flex flex-1 basis-[61.8vh] flex-col justify-center gap-3 py-8 md:py-20 lg:py-32">
        <h2 className="font-heading text-5xl font-bold md:text-7xl">
          Tim Kolberger
        </h2>
        <p className="font-heading  text-2xl text-gray-200">
          Maintainer & DevOps Engineer
        </p>
        <p className=" max-w-60ch mx-auto pt-4">
          Working on design systems and component libraries to make the web
          accessible and delightful for everyone.
        </p>
        <footer className="mt-4 flex flex-wrap gap-6">
          <Link href="https://twitter.com/TimKolberger">
            <FiTwitter className="mr-2 inline-block" />
            Twitter
          </Link>
          <Link href="https://elk.zone/techhub.social/@hakunamatim">
            <FaMastodon className="mr-2 inline-block" />
            Mastodon
          </Link>
          <Link href="mailto:hello@kolberger.eu">
            <FiMail className="mr-2 inline-block" />
            E-mail
          </Link>
        </footer>
      </section>
    </Page>
  </Layout>
)

export default HomePage
