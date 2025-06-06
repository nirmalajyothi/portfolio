import styles from "./App.module.css"
import About from "./components/About/About"
import Contact from "./components/Contacts/Contact"
import Experience from "./components/Experience/Experience"

import Hero from "./components/hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"


function App() {


  return (
    <div className={styles.app}>
     <Navbar/>
     <Hero/>
     <About/>
     <Experience/>
     <Projects/>
     <Contact/>
    
   </div>
   
  )
}

export default App
