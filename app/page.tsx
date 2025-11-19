import Hero from '@/components/Hero/Hero'
import Specialities from '@/components/Specialities/Specialities'
import HealthPackages from '@/components/HealthPackages/HealthPackages'
import PatientStories from '@/components/PatientStories/PatientStories'
import Blog from '@/components/Blog/Blog'
import NewsMedia from '@/components/NewsMedia/NewsMedia'
import Location from '@/components/Location/Location'

export default function Home() {
  return (
    <>
      <Hero />
      <Specialities />
      {/* <HealthPackages /> */}
      <PatientStories />
      {/* <Blog /> */}
      <NewsMedia />
      <Location/>
    </>
  )
}

