import React from 'react'
import Hero from './Hero'
import WelcomeToOurEvents from './WelcomeToOurEvents'
import UpcomingEvents from './UpcomingEvents'
import FeaturedSpeakers from './FeaturedSpeakers'
import PastEvents from './PastEvents'
import WhyAttend from './WhyAttend'
import AskedQuestion from './AskedQuestion'

const page = () => {
  return (
    <div>
      <Hero />
      <WelcomeToOurEvents />
      <UpcomingEvents />
      <FeaturedSpeakers />
      <PastEvents />
      <WhyAttend />
      <AskedQuestion />
    </div>
  )
}

export default page
