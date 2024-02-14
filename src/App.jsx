import styles from "./styles.module.css"
import reset from "./reset.module.css"

import { FooterComponent } from "./components/Footer"
import { HeaderComponent } from "./components/Header"
import { AboutMeComponent } from "./components/Main/AboutMe"
import { ProjectsComponent } from "./components/Main/Projects"
import { TechnologiesComponent } from "./components/Main/Technologies"
import { WelcomeComponent } from "./components/Main/Welcome"

function App() {

  return (
    <>
      <div className={styles.index}>
      <HeaderComponent/>
        <WelcomeComponent/>
        <AboutMeComponent/>
        <TechnologiesComponent/>
        <ProjectsComponent/>
      <FooterComponent/>
      </div>
    </>
  )
}

export default App
