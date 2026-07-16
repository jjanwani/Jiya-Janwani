import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Avatar from '../components/Avatar';
import Globe from '../components/Globe';
import LogoBadge from '../components/LogoBadge';

const values = [
  {
    title: 'Curious by default',
    body: 'I ask "why" until it stops being annoying — user interviews, RACI maps, root-cause analyses.',
  },
  {
    title: 'Build to learn',
    body: 'Prototypes over decks. I would rather ship a rough v1 and watch real people use it.',
  },
  {
    title: 'Bridge builder',
    body: 'Half business, half code — I translate between engineers, ops, and leadership.',
  },
];

const steps = [
  { n: '01', title: 'Sit in the problem', body: 'Shadow the floor, run interviews, read the threads nobody else reads.' },
  { n: '02', title: 'Map it before you build it', body: 'Journey maps, process flows, RACI matrices before any user story.' },
  { n: '03', title: "Bucket, don't boil the ocean", body: 'Group pain points into clear feature areas with named owners.' },
  { n: '04', title: 'Ship versions, gather signal', body: 'Small, dated releases beat one big launch.' },
  { n: '05', title: 'Own the change, not just the build', body: 'I run the rollout — training, feedback loops, real adoption.' },
];

const companies = ['SkySpecs', 'Span Carbon Fiber', 'Ross Tech Plus', 'Hemlock Semiconductor'];

export default function Home() {
  return (
    <>
      {/* ---------- hero ---------- */}
      <section id="hero" className="panel" style={{ alignItems: 'center', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '1.4rem' }}
        >
          <Avatar pose="wave" spin style={{ width: 190 }} />
        </motion.div>

        <motion.p
          className="eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          hi, thanks for scrolling by!
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="huge-title"
          style={{ maxWidth: 1000 }}
        >
          My name is <span style={{ color: 'var(--peach)' }}>Jiya</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="section-sub"
          style={{ marginTop: '1.6rem', textAlign: 'center', marginInline: 'auto' }}
        >
          A student at Umich studying Business + CS, interested in product management
          and how thoughtful innovation can change lives. Keep scrolling to learn more!
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          style={{ display: 'flex', gap: '0.8rem', marginTop: '2.4rem', flexWrap: 'wrap', justifyContent: 'center' }}
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

      {/* ---------- explore: experience + projects ---------- */}
      <section id="explore" className="panel" style={{ alignItems: 'center' }}>
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
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/experience" className="explore-card">
              <span className="ex-glow" />
              <span className="ex-num">01 · EXPERIENCE</span>
              <div>
                <h3>From spreadsheets to shipping a platform.</h3>
                <p>Five roles across PM, finance, and research — SkySpecs, Span Carbon Fiber, Ross Tech Plus, and Hemlock Semiconductor.</p>
              </div>
              <span className="ex-cta">walk the timeline →</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
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

      <div className="panel-divider" />

      {/* ---------- brand ---------- */}
      <section id="brand" className="panel" style={{ alignItems: 'center' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '3.5rem',
            alignItems: 'center',
            width: '100%',
            maxWidth: 1180,
          }}
        >
          <div>
            <motion.p className="eyebrow" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              how I work
            </motion.p>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Spin the globe.<br />That's kind of the idea.
            </motion.h2>
            <motion.p
              className="section-sub"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{ marginBottom: '2.6rem' }}
            >
              I rotate a problem until the real one shows up before I commit to a direction.
              Drag it — that restlessness is the instinct I bring to product work.
            </motion.p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  style={{ borderLeft: '2px solid var(--peach)', paddingLeft: '1.2rem' }}
                >
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--peach-light)', marginBottom: '0.35rem' }}>{v.title}</h3>
                  <p style={{ color: 'rgba(255,243,232,0.75)', fontSize: '0.95rem' }}>{v.body}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p style={{ marginTop: '2.4rem', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,243,232,0.5)' }}>
                teams I've worked with
              </p>
              <div className="logo-strip">
                {companies.map((c) => <LogoBadge key={c} name={c} />)}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
          >
            <Globe />
            <motion.div
              style={{ position: 'absolute', bottom: -30, right: 10 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Avatar pose="think" style={{ width: 110 }} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="panel-divider" />

      {/* ---------- framework ---------- */}
      <section id="framework" className="panel">
        <motion.p className="eyebrow" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          how I think
        </motion.p>
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          My product thinking loop
        </motion.h2>
        <motion.p
          className="section-sub"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{ marginBottom: '3.2rem' }}
        >
          The loop I ran while building VORTEX — and default to on every new problem since.
        </motion.p>

        <div className="fw-track">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              className="fw-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ delay: i * 0.08 }}
            >
              <span className="fw-num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </motion.div>
          ))}
          <motion.div
            className="fw-avatar"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{ rotate: [0, 6, -6, 0] }}
            transition={{ rotate: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
          >
            <Avatar pose="point" style={{ width: 140 }} />
          </motion.div>
        </div>

        <style>{`
          .fw-track { position: relative; display: grid; grid-template-columns: repeat(5, 1fr); gap: 1rem; }
          @media (max-width: 1000px) { .fw-track { grid-template-columns: repeat(2, 1fr); } }
          @media (max-width: 600px) { .fw-track { grid-template-columns: 1fr; } }
          .fw-step { background: linear-gradient(160deg, rgba(58,79,158,0.18), rgba(255,185,143,0.06)); border: 1px solid rgba(255,185,143,0.18); border-radius: 16px; padding: 1.5rem 1.2rem; }
          .fw-num { font-family: var(--font-display); font-size: 1.6rem; color: var(--peach); opacity: 0.7; }
          .fw-step h3 { font-size: 1.05rem; color: var(--peach-light); margin: 0.5rem 0 0.5rem; }
          .fw-step p { font-size: 0.85rem; color: rgba(255,243,232,0.78); }
          .fw-avatar { display: flex; align-items: flex-end; justify-content: center; }
        `}</style>
      </section>

      <div className="panel-divider" />

      {/* ---------- contact ---------- */}
      <section id="contact" className="panel" style={{ alignItems: 'center', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          animate={{ y: [0, -14, 0] }}
          transition={{ y: { duration: 3, repeat: Infinity, ease: 'easeInOut' } }}
        >
          <Avatar pose="jump" style={{ width: 170 }} />
        </motion.div>

        <motion.p className="eyebrow" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          let's talk
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: 760 }}
        >
          Got a problem worth mapping?
        </motion.h2>
        <motion.p
          className="section-sub"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{ marginInline: 'auto', marginBottom: '2.4rem' }}
        >
          Internships, product chats, or comparing notes on user research — my inbox is open.
        </motion.p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a className="contact-btn primary" href="mailto:jjanwani@umich.edu">✉️ jjanwani@umich.edu</a>
          <a className="contact-btn" href="https://www.linkedin.com/in/jiya-janwani" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="contact-btn" href="https://github.com/jjanwani" target="_blank" rel="noreferrer">GitHub</a>
        </div>

        <p style={{ marginTop: '3.5rem', fontSize: '0.78rem', color: 'rgba(255,243,232,0.4)' }}>
          Built by Jiya, scrolled by you · {new Date().getFullYear()}
        </p>
      </section>
    </>
  );
}
