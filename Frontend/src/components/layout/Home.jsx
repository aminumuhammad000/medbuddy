import Nav from '../common/Nav'
import Banner from '../common/Banner'
import Features from '../layout/Features'
import HowItWorks from './HowItWorks'
import Team from './Team'
import Feedbacks from './Feedbacks'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Nav />
        <Banner />
        <Features />
        <HowItWorks />
        <Team />
        <Feedbacks />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home
