import { motion } from 'framer-motion';
import LivingCanvas from '../components/LivingCanvas';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.75 },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="section"
      style={{ minHeight: '100vh', paddingTop: '8rem', gap: 0 }}
    >
      <LivingCanvas />

      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.1rem',
      }}>
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ marginBottom: '2rem' }}
        >
          hey, I'm glad you scrolled by
        </motion.p>

        {/* Big name — nodcoding style */}
        <motion.h1
          {...fadeUp(0.4)}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.8rem, 10vw, 8.5rem)',
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            background: 'linear-gradient(135deg, var(--cream) 0%, var(--peach-light) 50%, var(--peach) 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            marginBottom: '2.6rem',
          }}
        >
          Jiya Janwani.
        </motion.h1>

        {/* Staggered one-liner sentences */}
        <motion.p {...fadeUp(0.65)} style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.55rem)', color: 'rgba(255,243,232,0.9)', lineHeight: 1.4, marginBottom: '0.5rem' }}>
          Student at the University of Michigan.
        </motion.p>
        <motion.p {...fadeUp(0.82)} style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.55rem)', color: 'var(--peach-light)', lineHeight: 1.4, marginBottom: '0.5rem' }}>
          Business &amp; Computer Science.
        </motion.p>
        <motion.p {...fadeUp(0.99)} style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.55rem)', color: 'rgba(255,243,232,0.6)', lineHeight: 1.4, marginBottom: '2.4rem' }}>
          Interested in product management.
        </motion.p>

        <motion.div
          {...fadeUp(1.18)}
          style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <span className="pill">🎓 Ross + CS, Michigan</span>
          <span className="pill">🛰️ PM Intern @ SkySpecs</span>
          <span className="pill">💃 National Dance Honors Top 10</span>
        </motion.div>

        <div className="scroll-hint" style={{ marginTop: '4rem' }}>
          <span>keep scrolling</span>
          <div className="dot-track" />
        </div>
      </div>
    </section>
  );
}
