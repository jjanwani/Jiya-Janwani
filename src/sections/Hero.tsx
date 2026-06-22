import { motion } from 'framer-motion';
import Avatar from '../components/Avatar';

export default function Hero() {
  return (
    <section
      id="hero"
      className="section"
      style={{ alignItems: 'center', textAlign: 'center', paddingTop: '8rem' }}
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ marginBottom: '1.2rem' }}
      >
        <Avatar pose="wave" spin style={{ width: 200 }} />
      </motion.div>

      <motion.p
        className="eyebrow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        hey, I'm glad you scrolled by
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.7 }}
        style={{
          fontSize: 'clamp(2.1rem, 6vw, 4.4rem)',
          lineHeight: 1.08,
          maxWidth: 920,
        }}
      >
        Hi, my name is{' '}
        <span style={{ color: 'var(--peach)' }}>Jiya</span>.
        <br />
        I'm a student at the University of Michigan studying{' '}
        <span style={{ color: 'var(--peach-light)' }}>
          Business &amp; Computer Science
        </span>
        , interested in <span style={{ color: 'var(--peach)' }}>product management</span>.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.7 }}
        className="section-sub"
        style={{ marginTop: '1.5rem', textAlign: 'center', marginInline: 'auto' }}
      >
        This site is basically me, walking you through how I think, build, and ship —
        one scroll at a time. Grab your cursor, it likes to play along the way down.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        style={{ display: 'flex', gap: '0.8rem', marginTop: '2.2rem', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        <span className="pill">🎓 Ross + CS, Michigan</span>
        <span className="pill">🛰️ PM Intern @ SkySpecs</span>
        <span className="pill">💃 National Dance Honors Top 10</span>
      </motion.div>

      <div className="scroll-hint">
        <span>keep scrolling</span>
        <div className="dot-track" />
      </div>
    </section>
  );
}
