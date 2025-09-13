
import Layout from './Components/Layout'
import './Styles/style.css'
import { moduls } from './Data/data'


function App() {

  return (
    <div className="cv-container">
     <Layout moduls={moduls}/>
    </div>
  )
}

export default App
