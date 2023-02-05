import { panda } from '@/design-system/jsx'
import { Layout } from '../feature/layout/Layout'
import { Page } from '../feature/layout/Page'
import { Link } from '../feature/layout/Link'
import { FaMastodon } from 'react-icons/fa'
import { FiMail, FiTwitter } from 'react-icons/fi'
import { css } from '@/design-system/css'

const HomePage = () => (
  <Layout>
    <Page>
      <panda.section
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap="3"
        py={{ base: '8', md: '20', lg: '32' }}
        flex="1 1 61.8vh"
      >
        <panda.h2
          textStyle={{ base: '5xl', lg: '7xl' }}
          fontFamily="heading"
          fontWeight="bold"
        >
          Tim Kolberger
        </panda.h2>
        <panda.p textStyle={{ base: '2xl', lg: '3xl' }} fontFamily="heading">
          Maintainer & DevOps Engineer
        </panda.p>
        <panda.p textStyle={{ base: 'lg', lg: 'xl' }} pt="4" maxW="60ch">
          Working on design systems and component libraries to make the web
          accessible and delightful for everyone.
        </panda.p>
        <panda.footer display="flex" flexWrap="wrap" gap="6" mt="4">
          <Link href="https://twitter.com/TimKolberger">
            <FiTwitter
              className={css({ display: 'inline-block', mr: '1ch' })}
            />
            Twitter
          </Link>
          <Link href="https://elk.zone/techhub.social/@hakunamatim">
            <FaMastodon
              className={css({ display: 'inline-block', mr: '1ch' })}
            />
            Mastodon
          </Link>
          <Link href="mailto:hello@kolberger.eu">
            <FiMail className={css({ display: 'inline-block', mr: '1ch' })} />
            E-mail
          </Link>
        </panda.footer>
      </panda.section>
    </Page>
  </Layout>
)

export default HomePage
