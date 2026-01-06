import React from 'react'
import Artist from '../Components/Course Components/Artist'
import Price from '../Components/Course Components/Price'
import Location from "../Components/Reusable Components/Location"
import Timing from "../Components/Reusable Components/Timing"
import Contact from "../Components/Reusable Components/Contact"
import Feedback from "../Components/Home Components/Feedback"
import Call from '../Components/Course Components/Call'
export default function Course() {
  return (
    <div>
      <Call/>
      <Artist />
      <Price />
      <Location />
      <Timing />
      <Contact/>
      <Feedback/>
    </div>
  )
}
