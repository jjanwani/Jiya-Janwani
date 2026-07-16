import { motion } from 'framer-motion';
import LivingCanvas from '../components/LivingCanvas';

const slideIn = (delay: number, from: 'left' | 'right' | 'up' = 'up') => ({
  initial: { opacity: 0, x: from === 'left' ? -300 : from === 'right' ? 300 : 0, y: from === 'up' ? 30 : 0 },
  animate: { opacity: 1, x: 0, y: 0 },
  transition: { delay, duration: 0.8 },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="section"
      style={{ minHeight: '100vh', paddingTop: '10rem', paddingBottom: '8rem', gap: 0, justifyContent: 'center' }}
    >
      <LivingCanvas />

      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ marginBottom: '2.5rem' }}
        >
          hi, thanks for scrolling by!
        </motion.p>

        {/* Extra padding so gradient clip doesn't cut ascenders/descenders */}
        <motion.h1
          {...slideIn(0.4, 'up')}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(4rem, 11vw, 9rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            background: 'linear-gradient(135deg, var(--cream) 0%, var(--peach-light) 50%, var(--peach) 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            padding: '0.05em 0.1em 0.12em',
            marginBottom: '3rem',
          }}
        >
          Jiya Janwani.
        </motion.h1>

        <motion.p {...slideIn(0.65, 'left')} style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.6rem)', color: 'rgba(255,243,232,0.9)', lineHeight: 1.4, marginBottom: '1rem' }}>
          A student at Umich studying Business + CS.
        </motion.p>
        <motion.p {...slideIn(0.82, 'right')} style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.6rem)', color: 'var(--peach-light)', lineHeight: 1.4, marginBottom: '1rem' }}>
          Interested in product management and how thoughtful innovation can change lives.
        </motion.p>
        <motion.p {...slideIn(0.99, 'left')} style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.6rem)', color: 'rgba(255,243,232,0.55)', lineHeight: 1.4, marginBottom: '3.5rem' }}>
          Keep scrolling to learn more!
        </motion.p>

        <motion.div
          {...slideIn(1.18, 'up')}
          style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '5rem' }}
        >
          <span className="pill">🎓 Ross + CS, Michigan</span>
          <span className="pill">🛰️ PM Intern @ SkySpecs</span>
          <span className="pill">💃 Competitive Dancer</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,243,232,0.45)' }}
        >
          <span>keep scrolling</span>
          <div className="dot-track" />
        </motion.div>
      </div>
    </section>
  );
}
