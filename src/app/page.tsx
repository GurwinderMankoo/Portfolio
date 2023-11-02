import ContactMain from './components/contact/ContactMain'
import Experience from './components/Experience/page'
import HomeMain from './components/home/HomeMain'
import AboutMain from './components/about/AboutMain'
import Technologies from './components/techSection/Technologies'
import ProjectsMain from './components/projects/ProjectsMain'
import UpArrow from './components/common/UpArrow'
import FooterMain from './components/footer/FooterMain'

export default function Home() {
  return (
    <>
      <main className="bg-new-gradient text-black dark:bg-gray-900/90 dark:text-white">
        <HomeMain />
        <AboutMain />
        <Experience />
        <Technologies />
        <ProjectsMain />
        <ContactMain />
        <FooterMain />
      </main>
      <UpArrow />
    </>
  )
}
