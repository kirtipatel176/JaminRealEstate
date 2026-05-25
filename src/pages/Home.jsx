import Hero from '../components/Hero'
import PropertySearch from '../components/PropertySearch'
import FeaturedProperties from '../components/FeaturedProperties'
import WhyChooseUs from '../components/WhyChooseUs'
import InteractiveMap from '../components/InteractiveMap'
import ProcessTimeline from '../components/ProcessTimeline'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <>
      <Hero />
      <PropertySearch />
      <FeaturedProperties />
      <WhyChooseUs />
      <InteractiveMap />
      <ProcessTimeline />
      <Testimonials />
      <CTA />
    </>
  )
}

export default Home
