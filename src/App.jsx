import './App.css'
import NavBar from './component/NavBar'
import Summary from './component/Summary'
import Skills from './component/Skill'
import Projects from './component/Projects'
import AboutMe from './component/AboutMe'
import DarkMode from './component/DarkMode'
import Hero from './component/Hero'
import FooterComp from './component/FooterComp'

function App() {

  return (
    <>
    <DarkMode/>
    <div className="wrapper-container">
    <NavBar/> 
    {/* Personal Summary */}
    <Hero/>
    <Summary/>
    <Skills/> 
    <Projects/>
    {/* About me with contanct sections */}
    <AboutMe/>
    {/* Footer Section */}
    <FooterComp/>
    </div>
    </>
  )
}

export default App
