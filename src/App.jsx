import './App.css'
import TopBanner from './components/TopBanner';
import {Education} from './components/Education';
import SkillsCerts from './components/SkillsCerts';
import WorkExperience from './components/WorkExperience';

function App() {

  return (
    <>
      <TopBanner />
      <Education />
      <SkillsCerts />
      <WorkExperience />
    </>
  )
}

export default App
