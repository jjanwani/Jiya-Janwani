import Background from './components/Background';
import SpaceTunnel from './components/SpaceTunnel';
import CinematicScenes from './components/CinematicScenes';
import Nav from './components/Nav';
import Hero from './sections/Hero';
import Brand from './sections/Brand';
import Journey from './sections/Journey';
import Projects from './sections/Projects';
import Framework from './sections/Framework';
import Community from './sections/Community';
import Contact from './sections/Contact';

function App() {
  return (
    <>
      <Background />
      <SpaceTunnel />
      <CinematicScenes />
      <Nav />
      <main style={{ position: 'relative', zIndex: 2 }}>
        <Hero />
        <Brand />
        <Journey />
        <Projects />
        <Framework />
        <Community />
        <Contact />
      </main>
    </>
  );
}

export default App;
