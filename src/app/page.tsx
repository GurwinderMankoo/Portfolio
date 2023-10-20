import ContactMain from './components/contact/ContactMain'
import Experience from './components/Experience/page'
import HomeMain1 from './components/home/HomeMain1'
import AboutMain from './components/about/AboutMain'
import Technologies from './components/techSection/Technologies'
import ProjectsMain from './components/projects/ProjectsMain'
import UpArrow from './components/common/UpArrow'
import Main from './components/common/Main'

export default function Home() {
  return (
    <>
      {/* <main className="light:bg-gradient-to-b light:from-[#D6DBDC] light:to-white text-black dark:bg-gray-900/90 dark:text-white"> */}
      <Main>
        <HomeMain1 />
        <AboutMain />
        <Experience />
        <Technologies />
        <ProjectsMain />
        <ContactMain />
      </Main>
      {/* </main> */}
      <UpArrow />
    </>
  )
}
