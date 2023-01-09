import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Map from '../components/Map'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Expo Line SkyTrain Stations</title>
        <link rel="icon" href="/skytrain_icon.png" />
      </Head>
      <header className={styles.header}>
        <div className={styles.topnav}>
          <a
            href="https://www.translink.ca"
            target="_blank"
          >
          <Image src="/Translink_logo.png" alt="Translink Logo" width={125} height={50} />
          </a>
          <a href="https://www.translink.ca/trip-planner">Trip Planner</a>
          <a href="https://www.translink.ca/plans-and-projects?page=1&pageSize=10&sort=Date">Next Bus</a>
          <a href="https://www.translink.ca/transit-fares">Fares</a>
          <a href="https://www.translink.ca/schedules-and-maps?page=1">Schedules and Maps</a>
          <a href="https://www.translink.ca/rider-guide">Rider Guide</a>
          <a href="https://www.translink.ca/more-information">More</a>
          <a href="https://www.translink.ca/alerts">Alerts</a>
          <a href="https://www.translink.ca/search?page=1&pageSize=10&sort=Relevance">Search</a>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.title}>
          <h1>Expo Line SkyTrain Stations</h1>
        </div>
        <div className={styles.description}>
          <p>
          The Expo Line connects Downtown Vancouver with the cities of Burnaby, New Westminster, and  Surrey.
          </p>
        </div>
        <Map/>
        <div>
          <h2>Expo Line</h2>
          <p>The Expo Line operates two routes:</p>
            <ul>
              <li>Waterfront Station (Downtown Vancouver) to King George Station (Surrey)</li>
              <li>Waterfront Station (Downtown Vancouver) to Production Way-University Station (Burnaby)</li>
            </ul>
            <p>Transfer to the Millennium Line at the following stations:</p>
            <ul>
              <li>Commercial-Broadway Station</li>
              <li>Lougheed Town Centre Station</li>
              <li>Production Way-University Station</li>
            </ul>
            <p>Use Columbia Station to transfer to and from a train going to either King George or Production Way-University.</p>
            <p>Use Waterfront Station to transfer to the Canada Line, SeaBus, or West Coast Express.</p>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.column}>
          <a
            href="https://www.translink.ca"
            target="_blank"
          >
          <Image src="/Translink_logo.png" alt="Translink Logo" width={140} height={60}/>
          </a>
          <p>Metro Vancouver's transportation network, serving residents and visitors with public transit, major roads, bridges and Trip Planning.</p>
        </div>
        <div className={styles.column}>
          <h2>Getting Around</h2>
          <div className={styles.bottomnav}>
            <a href='https://www.translink.ca/transit-fares'>Transit Fares</a>
            <a href='https://www.translink.ca/schedules-and-maps?page=1'>Schedules</a>
            <a href='https://www.translink.ca/rider-guide'>Rider Info</a>
            <a href='https://www.translink.ca/alerts'>Transit Alerts</a>
          </div>
        </div>
        <div className={styles.column}>
          <h2>Resources</h2>
          <div className={styles.bottomnav}>
            <a href='https://www.translink.ca/about-us/customer-service/contact-information'>Contact Us</a>
            <a href='https://www.translink.ca/about-us/careers'>Transit Careers</a>
          </div>
        </div>
        <div className={styles.column}>
          <h2>Contact</h2>
          <p>Call us at 604.953.3333</p>
          <div className={styles.bottomnav}>
            <a href='https://www.google.com/maps/place/TransLink/@49.2247324,-122.8939064,17z/data=!4m5!3m4!1s0x5486765906294161:0x8be44a756edffc2f!8m2!3d49.2247289!4d-122.8917178'>400-287 Nelson's Ct., New Westminster, BC V3L0E7</a>
          </div>
        </div>
      </footer>
    </div>
  )
}