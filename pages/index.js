import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { useUser } from '../lib/hooks'
import EventsComponent from "../components/events"
import { withRouter } from 'next/router'

function Home({router}) {
  const events = router.query.data ? JSON.parse(router.query.data) : [];
  const user = useUser()

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
         <p>A community where those who identify as a woman can chat about and learn all-things blockchain. Sign up to stay updated on our upcoming events!</p>
       </section>
       {user && <EventsComponent events={events}/>}
    </Layout>
  )
}

export default withRouter(Home)
