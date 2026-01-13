import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Components/Layout';
import AboutMe from './Pages/AboutMe';
import Portfolio from './Pages/Portfolio';
import { DarkModeProvider } from './Context/ThemeContext';
import ReactGA from "react-ga4";
import './index.css';

ReactGA.initialize("G-TZ07536TFP");

function App() {

  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  
  return (
    <DarkModeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AboutMe />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </DarkModeProvider>
  );
}

export default App;