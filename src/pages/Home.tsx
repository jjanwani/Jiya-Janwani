import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../sections/Hero';
import Brand from '../sections/Brand';
import Framework from '../sections/Framework';
import Community from '../sections/Community';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />

      <section id="explore" className="section" style={{ alignItems: 'center' }}>
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center' }}
        >
          two stories worth a click
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          Where I've worked.<br />What I've built.
        </motion.h2>

        <div className="explore-grid">
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Link to="/experience" className="explore-card">
              <span className="ex-glow" />
              <span className="ex-num">01 · EXPERIENCE</span>
              <div>
                <h3>What I walked into, and what I left behind.</h3>
                <p>Five roles across PM, finance, and research — SkySpecs, Carbon Fiber Span, Ross Tech Plus, and Hemlock Semiconductor.</p>
              </div>
              <span className="ex-cta">walk the timeline →</span>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Link to="/projects" className="explore-card">
              <span className="ex-glow" />
              <span className="ex-num">02 · PROJECTS</span>
              <div>
                <h3>VORTEX, and a few other things.</h3>
                <p>A work order, asset &amp; inventory platform that erased ~150 hours/month — plus the consulting and research builds behind it.</p>
              </div>
              <span className="ex-cta">see the build →</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Brand />
      <Framework />
      <Community />
      <Contact />
    </>
  );
}
