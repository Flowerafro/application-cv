import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import AboutMe from './Pages/AboutMe';
import Portfolio from './Pages/Portfolio';
import { DarkModeProvider } from './Context/ThemeContext';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <DarkModeProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<AboutMe />} />
            <Route path="aboutme" element={<AboutMe />} />
            <Route path="portfolio" element={<Portfolio />} />
          </Route>
        </Routes>
      </DarkModeProvider>
    </BrowserRouter>
  );
}

export default App;
