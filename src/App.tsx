import { Routes, Route } from 'react-router-dom';
import Background from './components/Background';
import ParticleField from './components/ParticleField';
import Nav from './components/Nav';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <Background />
      <ParticleField />
      <Nav />
      <ScrollToTop />
      <main style={{ position: 'relative', zIndex: 2 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
