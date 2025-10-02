
import Layout from './Components/Layout'
import { DarkModeProvider } from './Context/ThemeContext'
import './index.css'
import { moduls } from './Data/data'


function App() {
  return (
    <DarkModeProvider>
      <div className="app">
        <Layout moduls={moduls}/>
      </div>
    </DarkModeProvider>
  )
}

export default App
