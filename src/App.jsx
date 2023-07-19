import styles from './styles.module.css'
import reset from './reset.module.css'

import { FooterComponent } from "./components/Footer"
import { HeaderComponent } from "./components/Header"
import { AboutMeComponent } from "./components/Main/AboutMe"
import { ProjectsComponent } from "./components/Main/Projects"
import { TecnologiesComponent } from "./components/Main/Tecnologies"
import { WellcomeComponent } from "./components/Main/Wellcome"

function App() {

  return (
    <>
      <div className={styles.index}>
      <HeaderComponent/>
        <WellcomeComponent/>
        <AboutMeComponent/>
        <TecnologiesComponent/>
        <ProjectsComponent/>
      <FooterComponent/>
      </div>
    </>
  )
}

export default App
