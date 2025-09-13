
import './App.css'
import PersonalDetail from './Components/PersonalDetail'
import Portfolio from './Components/Portfolio'
import Work from './Components/Work'
import Education from './Components/Education'

function App() {

  return (
    <div className="cv-container">
      <h1>CV </h1>
      <Portfolio />
      <Work />
      <Education />
      <PersonalDetail />
    </div>
  )
}

export default App
