import ContactMain from './components/contact/ContactMain'
import Experience from './components/Experience/page'
import HomeMain1 from './components/home/HomeMain1'
import AboutMain from './components/about/AboutMain'
import Technologies from './components/techSection/Technologies'
import ProjectsMain from './components/projects/ProjectsMain'
import UpArrow from './components/common/UpArrow'

export default function Home() {
  return (
    <>
      <main className="bg-white text-black dark:bg-gray-900/90 dark:text-white">
        <HomeMain1 />
        <AboutMain />
        <Experience />
        <Technologies />
        <ProjectsMain />
        <ContactMain />
      </main>
      <UpArrow />
    </>
  )
}
