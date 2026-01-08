import Video from '../Components/Home Components/Video'
import Category from '../Components/Home Components/Category'
import Contact from '../Components/Reusable Components/Contact'
import About from '../Components/Home Components/About'
import Services from '../Components/Home Components/Services'
import Team from '../Components/Home Components/Team'
import Gallery from '../Components/Home Components/Gallery'
import Mojo from '../Components/Reusable Components/Mojo'
import Sponsors from '../Components/Reusable Components/Sponsors'
import Locations from '../Components/Reusable Components/Location'
import Timing from '../Components/Reusable Components/Timing'
import Footer from '../Components/Reusable Components/Footer'
import FeedBack from '../Components/Home Components/Feedback'
import Next from '../Components/Reusable Components/Next'

export default function Home() {
  return (
    <div>
      <Video />
      <Category />
      <About />
      <Services />
      <Team/>
      <Next/>
      <Gallery />
      <Mojo />
      <Sponsors/>
      <Locations/>
      <Timing/>
      <Contact />
      <FeedBack/>
    </div>
  )
}
