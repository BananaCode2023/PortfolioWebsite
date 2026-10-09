
import './App.css'
import { Footer } from './components/footer'
import { GetInTouchSection } from './components/getInTouchSection'
import { Header } from './components/header'
import { ProfileSection } from './components/profileSection'
import { Projects } from './components/projects'
import { Services } from './components/services'
import { TechSection } from './components/techSection'

function App() {

  return (
    <>
      <Header/>
      <ProfileSection/>
      <Services/>
      <TechSection/>
      <Projects/>
      <GetInTouchSection/>
      <Footer/>
    </>
  )
}

export default App
