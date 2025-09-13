
import Layout from './Components/Layout'
import './Styles/style.css'
import './Styles/header.css'
import { moduls } from './Data/data'


function App() {

  return (
    <div>
     <Layout moduls={moduls}/>
    </div>
  )
}

export default App
