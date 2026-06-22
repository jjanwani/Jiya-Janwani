import Background from './components/Background';
import ParticleField from './components/ParticleField';
import Nav from './components/Nav';
import Hero from './sections/Hero';
import Brand from './sections/Brand';
import Journey from './sections/Journey';
import Projects from './sections/Projects';
import Framework from './sections/Framework';
import Contact from './sections/Contact';

function App() {
  return (
    <>
      <Background />
      <ParticleField />
      <Nav />
      <main style={{ position: 'relative', zIndex: 2 }}>
        <Hero />
        <Brand />
        <Journey />
        <Projects />
        <Framework />
        <Contact />
      </main>
    </>
  );
}

export default App;
