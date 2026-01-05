import Achievements from "../Components/About Components/Achievements"
import Next from "../Components/Reusable Components/Next"
import Mojo from "../Components/Reusable Components/Mojo"
import Sponsors from "../Components/Reusable Components/Sponsors"
import Location from "../Components/Reusable Components/Location"
import Timing from "../Components/Reusable Components/Timing"
import Contact from "../Components/Reusable Components/Contact"
import Story from "../Components/About Components/Story"
export default function About() {
  return (
    <div>
      <Achievements />
      <Story/>
      <Next />
      <Mojo />
      <Sponsors />
      <Location />
      <Timing />
      <Contact />

    </div>
  )
}

